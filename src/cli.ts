import { Command } from 'commander';
import { handleInit } from './commands/init';
import { handleAdd } from './commands/add';
import { Commands } from './types/types';

export function runCLI() {
  const program = new Command();

  program
    .name('mvc-dex-cli')
    .description('CLI for generating project structure')
    .version('1.0.3');

  program
    .command(Commands.Init)
    .argument('<projectName>', 'Project name')
    .action(handleInit);

  program
    .command(Commands.Add)
    .argument('<serviceName>', 'Service name')
    .action(handleAdd);

  program.parse(process.argv);
}

