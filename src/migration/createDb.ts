import * as fs from "fs";
import * as path from "path";
import { exec } from "child_process";
import * as util from "util";

const asyncExec = util.promisify(exec);

console.log("migration-all-table");

console.log(`
  --------------------------------------
  +++Laggard Project Migration Start+++
  --------------------------------------
`);

let migrationAllTable = async () => {
  let migrationFiles: string[] = [];
  fs.readdir(path.join(__dirname, "/", "createTable"), async (err, files) => {
    if (err) console.log("err : ", err);
    if (files) {
      files.forEach((el) => {
        migrationFiles.push(el);
      });

      for (let el of migrationFiles) {
        console.log("Migration File Name : ", el);

        const { stdout, stderr } = await asyncExec(
          `yarn ts-node "./src/migration/createTable/${el}"`
        );
        if (stdout) console.log(stdout);
        if (stderr) console.error("Std Err : ", stderr);
      }
    }
  });
};
migrationAllTable();
