"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const events_1 = require("events");
class Manager extends events_1.EventEmitter {
    constructor(client, options) {
        super();
        if (!client)
            throw new Error("Please provide Client");
        this.client = client;
        if (!options || typeof options !== "object")
            throw new Error("Please provide valid options object");
        this.config = options;
    }
    setRole(member) {
        return __awaiter(this, void 0, void 0, function* () {
            if (member.user.flags) {
                let flags = member.user.flags.serialize();
                console.log(flags);
                for (const [key, value] of Object.entries(flags)) {
                    // @ts-ignore
                    if (this.config[key] && value) {
                        // @ts-ignore
                        yield member.roles.add(this.config[key]);
                    }
                }
            }
        });
    }
}
exports.Manager = Manager;
