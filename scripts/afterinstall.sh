#!/bin/bash

cd /home/ubuntu/Spotify-m/client
npm install
npm rebuild
REACT_APP_CLIENT_URL=http://localhost:3000 npm run build:client
cd /home/ubuntu/Spotify-m/api
npm install
chmod +x api/src/spotify-api.js
sudo systemctl restart server

