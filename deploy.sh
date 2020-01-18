#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add .
git commit -m 'deploy content'

git push -f origin master
