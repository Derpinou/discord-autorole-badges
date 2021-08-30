/// <reference types="node" />
import { EventEmitter } from "events";
import { Client, GuildMember } from "discord.js";
import { ManagerOptions } from "./interfaces";
declare class Manager extends EventEmitter {
    readonly client: Client;
    readonly config: ManagerOptions;
    constructor(client: Client, options: ManagerOptions);
    setRole(member: GuildMember): Promise<void>;
}
export { Manager };
