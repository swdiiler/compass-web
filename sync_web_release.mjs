import fs from "node:fs";
import path from "node:path";

const files = ["index.html", "app.js", "styles.css", "source-data.js"];
const webDir = "web";

fs.mkdirSync(webDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(file, path.join(webDir, file));
}

fs.closeSync(fs.openSync(path.join(webDir, ".nojekyll"), "a"));

console.log(`Synced ${files.length} files to ${webDir}/`);
