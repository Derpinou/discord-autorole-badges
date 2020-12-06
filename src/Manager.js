const {EventEmitter} = require('events');
class DiscordAutoRoleBadges extends EventEmitter {
    constructor(client, config) {
        super();
        this.client = client;
        this.config = config;
        this.client.on("guildMemberAdd", async (member) => {
            if (member.user.flags) {
                let flags = member.user.flags.serialize();
                for (const [key, value] of Object.entries(flags)) {
                    if (this.config[key] && value) {
                        await member.roles.add(this.config[key]);
                    }
                }
            }
        })
    }
    async addRole(member, config) {
        if (member.user.flags) {
            let flags = member.user.flags.serialize();
            for (const [key, value] of Object.entries(flags)) {
                if (config[key] && value) {
                    await member.roles.add(config[key]);
                }
            }
        }
    }
}
module.exports = DiscordAutoRoleBadges;