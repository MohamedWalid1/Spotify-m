#!/bin/bash

cp /tmp/.env /home/ubuntu/Spotify-m/client
cd /home/ubuntu/Spotify-m/client
npm install
npm rebuild
npm run build:client
cd /home/ubuntu/Spotify-m/api
npm install
chmod +x api/src/spotify-api.js
sudo systemctl restart server

