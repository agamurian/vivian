#!/bin/bash
npm run build &&  sudo rm -r /var/www/kerka && sudo cp -r ./build/ /var/www/kerka
