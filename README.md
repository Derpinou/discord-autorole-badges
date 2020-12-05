# Discord AutoRole Badges

[![downloadsBadge](https://img.shields.io/npm/dt/discord-autorole-badges?style=for-the-badge)](https://npmjs.com/discord-autorole-badges)
[![versionBadge](https://img.shields.io/npm/v/discord-autorole-badges?style=for-the-badge)](https://npmjs.com/discord-autorole-badges)

Discord AutoRole Badges is a powerful [Node.js](https://nodejs.org) module that allows you to easily give badges roles when new member join a server

## Installation

```
npm i discord-autorole-badges
```

## Exemple
If you want add specified roles in specified guild:
```js
const {Manager} = require('./index'),
    {Client} = require('discord.js'),
    client = new Client();

client.login("token")

new Manager(client, true, {
        DISCORD_PARTNER: "xxxxxxxxxxxxxxxxxx",
        HYPESQUAD_EVENTS: "xxxxxxxxxxxxxxxxxx",
        BUGHUNTER_LEVEL_1: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BRAVERY: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BRILLIANCE: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BALANCE: "xxxxxxxxxxxxxxxxxx",
        EARLY_SUPPORTER: "xxxxxxxxxxxxxxxxxx",
        VERIFIED_DEVELOPER: "xxxxxxxxxxxxxxxxxx",
        EARLY_VERIFIED_DEVELOPER: "xxxxxxxxxxxxxxxxxx"
    });
```
Else, if you want to add badges with databases in others guilds
```js
const {Manager} = require('./index'),
    {Client} = require('discord.js'),
    client = new Client();

client.login("token")

client.dab = new Manager();

client.on("guildMemberAdd", async (member) => {
    await client.dab.addRole(member, {
        HYPESQUAD_EVENTS: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BRAVERY: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BRILLIANCE: "xxxxxxxxxxxxxxxxxx",
        HOUSE_BALANCE: "xxxxxxxxxxxxxxxxxx",
        EARLY_SUPPORTER: "xxxxxxxxxxxxxxxxxx",
    })
})
```

List of supported badges by the package:
```js
    DISCORD_EMPLOYEE
    DISCORD_PARTNER
    HYPESQUAD_EVENTS
    BUGHUNTER_LEVEL_1
    HOUSE_BRAVERY
    HOUSE_BRILLIANCE
    HOUSE_BALANCE
    EARLY_SUPPORTER
    TEAM_USER
    SYSTEM
    BUGHUNTER_LEVEL_2
    VERIFIED_BOT
    VERIFIED_DEVELOPER
    EARLY_VERIFIED_DEVELOPER
```