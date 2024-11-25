#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';

const program = new Command();


program
  .command('greet')
  .option('-n, --name <name>', 'name to greet')
  .action((options) => {
    console.log(chalk.green(`Hello, ${options.name}!`));
  });


program
  .command('info')
  .description('Display my social media and work information')
  .action(() => {
    const title = chalk.bgCyan.black(' My Info ');
    const boxWidth = 50;
    const border = chalk.bgCyan.white('═'.repeat(boxWidth));
    
    // Display the box
    console.log(chalk.bgCyan.white('╔' + '═'.repeat(boxWidth) + '╗'));
    console.log(chalk.bgCyan.white('║' + title.padStart((boxWidth + title.length) / 2) + '║'));
    console.log(chalk.bgCyan.white('╠' + border + '╣'));
    console.log(chalk.bgCyan.white('║ ' + chalk.white('Work: ') + chalk.white('MCA Student AT Marwadi University') + ' '.repeat(10) + '║'));
    console.log(chalk.bgCyan.white('║ ' + chalk.white('Twitter: ') + chalk.cyan('https://x.com/goswami_vi43561') + ' '.repeat(5) + '║'));
    console.log(chalk.bgCyan.white('║ ' + chalk.white('GitHub: ') + chalk.green('https://github.com/VishwaGoswami1407') + ' '.repeat(4) + '║'));
    console.log(chalk.bgCyan.white('║ ' + chalk.white('LinkedIn: ') + chalk.blue('https://linkedin.com/in/vishwagoswami') + ' '.repeat(2) + '║'));
    console.log(chalk.bgCyan.white('║ ' + chalk.white('Discord: ') + chalk.cyan('Vishwa Goswami') + ' '.repeat(14) + '║'));
    console.log(chalk.bgCyan.white('╚' + '═'.repeat(boxWidth) + '╝'));
  });


program.parse(process.argv);