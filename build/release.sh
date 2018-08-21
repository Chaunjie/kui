#!/usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "开始打包程序"
  # do build
  gulp build

  # do copy
  gulp do-copy
  # do copy
  # npm version $VERSION --message "[release] $VERSION"
fi
