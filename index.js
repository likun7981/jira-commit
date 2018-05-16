#!/usr/bin/env node

const path = require('path');
const existSync = require('fs').existsSync;
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

const pkg = require('read-pkg').sync(process.cwd())

const czConventional = require.resolve(pkg.gcz ? `cz-conventional/${pkg.gcz}.js` : 'cz-conventional')
const isGlobalInstall = existSync(path.join(__dirname, './node_modules/commitizen'));

bootstrap({
  cliPath: isGlobalInstall ? path.join(__dirname, './node_modules/commitizen') : path.join(__dirname, '../commitizen'),
  config: {
    path: czConventional
  }
});

process.env.__JIRA_COMMIT_USE = 'true'

// Don't print error stack trace if commit failed
process.on('uncaughtException', (err) => {
  console.error(err.message || err);
});
