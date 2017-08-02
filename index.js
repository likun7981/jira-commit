const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname, 'node_modules/commitizen'),
  config: {
    path: 'cz-conventional-changelog-simple'
  }
});

// Don't print error stack trace if commit failed
process.on('uncaughtException', (err) => {
  console.error(err.message || err);
});
