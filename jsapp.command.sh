#!/usr/bin/env bash


if nc -zw1 google.com 80; then
    npm install --save
    echo "npm packages were updated"
else
    echo "The network is unreachable, npm packages were not updated"
fi

npm run dev

