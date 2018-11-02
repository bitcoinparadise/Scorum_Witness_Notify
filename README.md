Requires [Node.js](https://github.com/nodejs/node) libraries and a Discord bot account.

# Scorum Witness Notify  - Discord Bot

#### Discord bot to notify Scorum Witness of missed blocks.

The instructions will install the notification bot and [Scorum-js](https://github.com/scorum/scorum-js) libariries.

* First create a Discord bot account, get the bot token for later and continue with the installation.

Guide on how to create a Discord bot: https://discordpy.readthedocs.io/en/rewrite/discord.html

## Installation

```
$ git clone https://github.com/bitcoinparadise/Scorum_Witness_Notify
$ cd Scorum_Witness_Notify
$ npm install
$ npm install @scorum/scorum-js --save
```

## Configuration
First rename config-example.json to config.json:

```
$ mv config-example.json config.json
```

Then set the following options in config.json:

```
{
  "rpc_nodes": [
    "https://prodnet.scorum.com/",
    "ADDITIONAL_NODE_URL"
  ],
  "chain_id": "chain_id, db4007d45f04c1403a7e66a5c66b5b1cdfc2dde8b5335d1d2f116d592ca3dbb1",
  "accountname": "USERNAME",
  "discorduser": "DISCORD_USER_ID",
  "token": "BOT_TOKEN",
}
```

## Run

```
node witness_notify.js
```
<br>

Based on @markptrueman's [witness_monitor_tutorial](https://github.com/markptrueman/witness_monitor_tutorial)
