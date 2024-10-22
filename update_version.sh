#!/bin/bash

git pull
rm -rf ./build
bun run build
pm2 restart vf9000
