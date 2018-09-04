const DtsCreator = require("typed-css-modules");
const glob = require("glob");
const {
  existsSync,
  stat: fsStat,
  writeFileSync,
  unlinkSync
} = require("fs");
const {
  promisify
} = require("util");
const chalk = require("chalk");
const sass = require("node-sass");

const stat = promisify(fsStat);

const creator = new DtsCreator({
  camelCase: true,
});

const REMOVE_GENERATED_CSS = true;

function createTypings(cssPath, stylesPath) {
  console.log(
    chalk `{cyan Generating declarations for {blue "${stylesPath}"}}.`
  );
  creator
    .create(cssPath)
    .then(content => {
      content.rInputPath = stylesPath;
      return content.writeFile();
    })
    .catch(console.error);
}


function transformFromSass(filePath) {
  const [_, extension] = filePath.match(/(\w+)$/);

  if (extension === "scss") {
    const cssPath = filePath.replace(".scss", ".css-generated");
    writeFileSync(
      cssPath,
      sass.renderSync({
        file: filePath,
        outputStyle: "expanded"
      }).css
    );
    return cssPath;
  }
  return filePath;
}

function generateTypingsFromCssFiles() {
  glob("src/**/*.?(s)css", (error, filePaths) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    for (const stylesPath of filePaths) {
      const typingPath = stylesPath + ".d.ts";
      if (existsSync(typingPath)) {
        Promise.all([stat(typingPath), stat(stylesPath)]).then(
          ([typingStats, styleStats]) => {
            if (typingStats.mtimeMs < styleStats.mtimeMs) {
              const cssPath = transformFromSass(stylesPath);
              createTypings(cssPath, stylesPath);
              if (REMOVE_GENERATED_CSS && cssPath !== stylesPath) {
                unlinkSync(cssPath);
              }
            }
          }
        );
      } else {
        createTypings(stylesPath);
      }
    }
  });
}

generateTypingsFromCssFiles();