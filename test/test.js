const {Manager} = require('../lib');
const {Client} = require('discord.js');
const client = new Client({ intents: 32767})


let manager = new Manager(client, {
    STAFF: "XXXXXX",
    PARTNER: "XXXXXX",
    HYPESQUAD: "XXXXXX",
    BUG_HUNTER_LEVEL_1: "XXXXXX",
    HYPESQUAD_ONLINE_HOUSE_1: "XXXXXX",
    HYPESQUAD_ONLINE_HOUSE_2: "XXXXXX",
    HYPESQUAD_ONLINE_HOUSE_3: "XXXXXX",
    PREMIUM_EARLY_SUPPORTER: "XXXXXX",
    TEAM_USER: "XXXXXX",
    BUG_HUNTER_LEVEL_2: "XXXXXX",
    VERIFIED_BOT: "XXXXXX",
    ACTIVE_DEVELOPER: "XXXXXX",
    VERIFIED_DEVELOPER: "XXXXXX",
    CERTIFIED_MODERATOR: "XXXXXX",

})
client.on("guildMemberAdd", async (member) => {
    await manager.setRole(member);
})

client.on("ready", () => {
    console.log("ready")
})

client.login("SUPER_SECRET_TOKEN")
