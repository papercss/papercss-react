const DtsCreator = require('typed-css-modules');
const glob = require('glob');
const { existsSync, stat: fsStat } = require('fs');
const { promisify } = require('util');
const chalk = require('chalk');

const stat = promisify(fsStat);

const creator = new DtsCreator({
  camelCase: true
});

function createTypings(stylesPath) {
  console.log(
    chalk`{cyan Generating declarations for {blue "${stylesPath}"}}.`
  );
  creator
    .create(stylesPath)
    .then(content => content.writeFile())
    .catch(console.error);
}

glob('src/**/*.?(s)css', {}, (error, filePaths) => {
  if (error) {
    console.error(error);
  }
  for (const stylesPath of filePaths) {
    const typingPath = stylesPath + '.d.ts';
    if (existsSync(typingPath)) {
      Promise.all([stat(typingPath), stat(stylesPath)]).then(
        ([typingStats, styleStats]) => {
          if (typingStats.mtimeMs < styleStats.mtimeMs) {
            createTypings(stylesPath);
          }
        }
      );
    } else {
      createTypings(stylesPath);
    }
  }
});
