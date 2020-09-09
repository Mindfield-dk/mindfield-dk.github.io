#!/usr/bin/env bash
function check(){
  if [ "${TARGET_BRANCH}" = "" ]; then echo "Must specify TARGET_BRANCH"; exit 1; fi
  if [ "${EVENT_NAME}" = "" ]; then echo "Must specify EVENT_NAME"; exit 1; fi
  if [ "${TOKEN}" = "" ]; then echo "Must specify TOKEN"; exit 1; fi
  if [ "${REPO}" = "" ]; then echo "Must specify REPO"; exit 1; fi
  if [ "${RUN}" = "" ]; then echo "Must specify RUN"; exit 1; fi
  if [ "${ACTOR}" = "" ]; then echo "Must specify ACTOR"; exit 1; fi
}

function publish() {
  if [ "${EVENT_NAME}" == "push" ]; then
    echo "Publishing to ${TARGET_BRANCH} on ${REPO}"
    if [ -d ./${TARGET_BRANCH} ]; then rm -rf ./${TARGET_BRANCH}; fi
    working_dir=$(pwd)
    git clone --quiet --branch=${TARGET_BRANCH} https://${ACTOR}:${TOKEN}@github.com/${REPO}.git ${TARGET_BRANCH} > /dev/null
    cd ${working_dir}/${TARGET_BRANCH}
    if [ ! -z "$(git config user.email)" ]; then org_name="$(git config user.email)"; fi
    if [ ! -z "$(git config user.name)" ]; then org_email="$(git config user.name)"; fi
    git config user.email "actions@github.com"
    git config user.name "Git Actions"
    find ./* -path ./.git -prune -exec rm -rf {} \;  2>/dev/null
    echo "www.mindfield.dk" > ${working_dir}/${TARGET_BRANCH}/CNAME
    cp -r ${working_dir}/dist/* ${working_dir}/${TARGET_BRANCH}
    git add -f .
    git commit -m "Github Actions published to ${TARGET_BRANCH} (build: ${RUN})"
    git push -fq origin ${TARGET_BRANCH} > /dev/null
    if [ ! -z "${org_email}" ]; then git config user.email "${org_email}";  fi
    if [ ! -z "${org_name}" ];  then git config user.name "${org_name}"; fi
    cd ${working_dir}
    if [ -d ${TARGET_BRANCH} ]; then rm -rf ${TARGET_BRANCH}; fi
  else
    echo "Skipped publish"
  fi
}

TARGET_BRANCH="master"
EVENT_NAME=${GITHUB_EVENT_NAME}
TOKEN=${GITHUB_TOKEN}
REPO=${GITHUB_REPOSITORY}
RUN=${GITHUB_RUN_NUMBER}
ACTOR=${GITHUB_ACTOR}

optstring=":ha:b:e:t:r:s:"
while getopts ${optstring} arg; do
  case ${arg} in
    h)
      echo "showing usage!"
      ;;
    a)
      if [ "${ACTOR}" = "" ]; then ACTOR=$OPTARG; fi
      ;;
    b)
      if [ "${TARGET_BRANCH}" = "" ]; then TARGET_BRANCH=$OPTARG; fi
      ;;
    e)
      if [ "${EVENT_NAME}" = "" ]; then EVENT_NAME=$OPTARG; fi
      ;;
    t)
      if [ "${TOKEN}" = "" ]; then TOKEN=$OPTARG; fi
      ;;
    r)
      if [ "${REPO}" = "" ]; then REPO=$OPTARG; fi
      ;;
    s)
      if [ "${RUN}" = "" ]; then RUN=$OPTARG; fi
      ;;
    :)
      echo "$0: Must supply an argument to -$OPTARG." >&2
      exit 1
      ;;
    ?)
      echo "Invalid option: -${OPTARG}."
      exit 2
      ;;
  esac
done

check
publish
