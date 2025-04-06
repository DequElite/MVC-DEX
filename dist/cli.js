"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = runCLI;
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const types_1 = require("./types/types");
function runCLI() {
    const program = new commander_1.Command();
    program
        .name('mvc-dex-cli')
        .description('CLI for generating project structure')
        .version('1.0.3');
    program
        .command(types_1.Commands.Init)
        .argument('<projectName>', 'Project name')
        .action(init_1.handleInit);
    program
        .command(types_1.Commands.Add)
        .argument('<serviceName>', 'Service name')
        .action(add_1.handleAdd);
    program.parse(process.argv);
}
