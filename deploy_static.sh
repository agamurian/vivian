#!/bin/bash
rm -r ./build && bun run build &&  sudo rm -r /var/www/vivian && sudo cp -r ./build /var/www/vivian
