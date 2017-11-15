#!/usr/bin/env node

const path = require('path');
const existSync = require('fs').existsSync;
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

const isGlobalInstall = existSync(path.join(__dirname, './node_modules/commitizen'));


bootstrap({
  cliPath: isGlobalInstall ? path.join(__dirname, './node_modules/commitizen') : path.join(__dirname, '../commitizen'),
  config: {
    path: 'cz-conventional-changelog-simple'
  }
});

process.env.__JIRA_COMMIT_USE = 'true'

// Don't print error stack trace if commit failed
process.on('uncaughtException', (err) => {
  console.error(err.message || err);
});
