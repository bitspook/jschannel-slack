var slackAPIToken = process.env.SLACK_API_TOKEN;
var slackBotToken = process.env.SLACK_BOT_TOKEN;
var port = process.env.PORT || 3000;

if (!slackAPIToken || !slackBotToken) {
  console.error("Required Environtment Variables: $SLACK_API_TOKEN $SLACK_BOT_TOKEN");
  process.exit();
}

var slackin = require('slackin')({
  token: slackAPIToken,
  interval: 1000,
  org: 'jschannel',
  silent: false
});

var slackIRC = require('slack-irc');
var ircConfig = {
  "nickname": "jschannel-bot",
  "server": "irc.freenode.org",
  "token": slackBotToken,
  "channelMapping": {
    "#general": "#jschannel"
  }
};

slackin.listen(port);
slackIRC(ircConfig);
