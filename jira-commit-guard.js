// #!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
if (!process.env.JIRA_COMMIT_USE) {
  const yourCommitName = process.argv.slice(2)[0] || "cz";
  console.log(
    boxen(
      `The command ${chalk.gray("git commit")} is forbidden \nUse ${chalk.green(
        `npm run ${yourCommitName}`
      )} instead`,
      {
        padding: 1,
        borderColor: "yellow"
      }
    )
  );
  process.exit(1);
}
delete process.env.JIRA_COMMIT_USE;
