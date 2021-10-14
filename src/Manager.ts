import {EventEmitter} from "events";
import {Client, GuildMember} from "discord.js";
import {ManagerOptions} from "./interfaces";

class Manager extends EventEmitter {
    readonly client: Client
    readonly config: ManagerOptions
    constructor(client: Client, options: ManagerOptions) {
        super();
        if (!client) throw new Error("Please provide Client")
        this.client = client
        if (!options ||  typeof options !== "object") throw new Error("Please provide valid options object")
        this.config = options
    }

    async setRole(member: GuildMember) {
        if (member.user.flags) {
            let flags = member.user.flags.serialize();
            for (const [key, value] of Object.entries(flags)) {
                // @ts-ignore
                if (this.config[key] && value) {
                    // @ts-ignore
                    await member.roles.add(this.config[key]);
                }
            }
        }
    }
}

export {Manager}
