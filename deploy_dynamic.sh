#!/bin/bash
rm -r ./build && bun run build && pm2 restart vf9000
