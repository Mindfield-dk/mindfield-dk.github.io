#!/usr/bin/env bash

TARGET_BRANCH=${1:-"master"}
EVENT_NAME=${2:-${GITHUB_EVENT_NAME}}
TOKEN=${3:-${GITHUB_TOKEN}}
REPO=${4:-${GITHUB_REPOSITORY}}
RUN=${5:-${GITHUB_RUN_NUMBER}}

if [ "${EVENT_NAME}" == "push" ]; then
  working_dir=$(pwd)
  org_name="$(git config user.email)"
  org_email="$(git config user.name)"
  git config user.email "actions@github.com"
  git config user.name "Git Actions"
  git clone --quiet --branch=${TARGET_BRANCH} https://${TOKEN}@github.com/${REPO}.git ${TARGET_BRANCH} > /dev/null
  cd ${TARGET_BRANCH}
  ls -la
  rm -rf *.*
  cp -Rf ${working_dir}/dist ./
  #git add -f .
  #git commit -m "Github Actions build ${GITHUB_RUN_NUMBER} pushed to master"
  #git push -fq origin ${TARGET_BRANCH} > /dev/null
  cd ..
  git config user.email "${org_email}"
  git config user.name "${org_name}"
fi
