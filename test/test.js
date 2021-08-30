const {Manager} = require('../lib');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    DISCORD_EMPLOYEE: "XXXXXX",
    PARTNERED_SERVER_OWNER: "XXXXXX",
    HYPESQUAD_EVENTS: "XXXXXX",
    BUGHUNTER_LEVEL_1: "XXXXXX",
    HOUSE_BRAVERY: "XXXXXX",
    HOUSE_BRILLIANCE: "XXXXXX",
    HOUSE_BALANCE: "XXXXXX",
    EARLY_SUPPORTER: "XXXXXX",
    TEAM_USER: "XXXXXX",
    BUGHUNTER_LEVEL_2: "XXXXXX",
    VERIFIED_BOT: "XXXXXX",
    EARLY_VERIFIED_BOT_DEVELOPER: "XXXXXX",
    DISCORD_CERTIFIED_MODERATOR: "XXXXXX",

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("ready")
})

client.login("SUPER_SECRET_TOKEN")