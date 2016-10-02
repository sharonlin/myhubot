@echo off

call npm install
SETLOCAL
SET PATH=node_modules\.bin;node_modules\hubot\node_modules\.bin;%PATH%
SET HUBOT_SLACK_TOKEN=xoxb-85816617941-fPeCb1VciHBBvDTnFhBHcGWp
SET HUBOT_REST_SEND_URL = http://localhost:3000/hubot-web/message

node_modules\.bin\hubot.cmd --name "nile" %* 
