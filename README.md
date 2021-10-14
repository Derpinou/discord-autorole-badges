# Discord AutoRole Badges

[![downloadsBadge](https://img.shields.io/npm/dt/discord-autorole-badges?style=for-the-badge)](https://npmjs.com/discord-autorole-badges)
[![versionBadge](https://img.shields.io/npm/v/discord-autorole-badges?style=for-the-badge)](https://npmjs.com/discord-autorole-badges)

Discord AutoRole Badges is a powerful [Node.js](https://nodejs.org) module that allows you to easily give badges roles when new member join a server

If you don't understand something in this page, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Support Server](https://discord.gg/ncheNRHFR7)


## Installation

```
npm i discord-autorole-badges
```

## Example
```js
const {Manager} = require('discord-autorole-badges');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    DISCORD_EMPLOYEE: "role_id",
    PARTNERED_SERVER_OWNER: "role_id",
    HYPESQUAD_EVENTS: "role_id",
    BUGHUNTER_LEVEL_1: "role_id",
    HOUSE_BRAVERY: "role_id",
    HOUSE_BRILLIANCE: "role_id",
    HOUSE_BALANCE: "role_id",
    EARLY_SUPPORTER: "role_id",
    TEAM_USER: "role_id",
    BUGHUNTER_LEVEL_2: "role_id",
    VERIFIED_BOT: "role_id",
    EARLY_VERIFIED_BOT_DEVELOPER: "role_id",
    DISCORD_CERTIFIED_MODERATOR: "role_id",

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("ready")
})

client.login("SUPER_SECRET_TOKEN")
```

List of supported badges by the package: 
Links: 
* [Discord.js Documentation](https://discord.js.org/#/docs/main/stable/class/UserFlags?scrollTo=s-FLAGS)
* [Discord.dev](https://discord.com/developers/docs/resources/user#user-object-user-flags)
```js
    DISCORD_EMPLOYEE
    PARTNERED_SERVER_OWNER
    HYPESQUAD_EVENTS
    BUGHUNTER_LEVEL_1
    HOUSE_BRAVERY
    HOUSE_BRILLIANCE
    HOUSE_BALANCE
    EARLY_SUPPORTER
    TEAM_USER
    BUGHUNTER_LEVEL_2
    VERIFIED_BOT
    EARLY_VERIFIED_BOT_DEVELOPER
    DISCORD_CERTIFIED_MODERATOR
```
