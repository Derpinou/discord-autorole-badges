"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.Manager = void 0;
var Manager_1 = require("./src/Manager");
Object.defineProperty(exports, "Manager", { enumerable: true, get: function () { return Manager_1.Manager; } });
// eslint-disable-next-line @typescript-eslint/no-var-requires
exports.version = require(`${__dirname}/../package.json`).version;
