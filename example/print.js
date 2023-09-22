import marked from '../tests/_marked.js';
import chalk from 'chalk';
import TerminalRenderer from '../index.js';

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer({
    // Change style for code
    codespan: chalk.underline.magenta,
    emoji: true,

    // Can also override color/styling by own functions.
    firstHeading: function (text) {
      return '*** ' + text;
    }
  })
});

// Show the parsed data
console.log(
  marked('# Hello \n\nThis is **markdown** printed in the `terminal` :+1:')
);
