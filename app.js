// module.exports.amount = 9;

// if (module.exports.amount < 10) console.log("small number");
// else console.log("large number");

// console.log(`hey its my first node app!!!`);
// // console.log(__dirname);
// // console.log(__filename);

// // module.exports = { amount };

// module.exports;

// console.log(module);

// const os = require("os");

// //  info about current user
// const user = os.userInfo();
// console.log(user);
// console.log(os.uptime() / (24 * 3600));

// const osInfo = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem() / Math.pow(1024, 2),
//   freeMem: os.freemem() / Math.pow(1024, 2),
// };

// console.log(osInfo);

// const path = require("path");
// console.log(path.sep);
// const filePath = path.join("/content", "util.txt");

// const base = path.basename(filePath);
// const absolute = path.resolve(__dirname, "content/util.txt");
// console.log(absolute);
// console.log(base, filePath);
// const { readFileSync, writeFileSync } = require("fs");
// const text = readFileSync(__dirname + "/content/util.txt", "utf-8");
// console.log(text);
// writeFileSync("./content/util.txt", `here is the result:\n${text}`, {
//   flag: "a",
// });

const { readFile, writeFile } = require("fs");

readFile("./content/util.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  writeFile("./content/second.txt", result, (err, result) => {
    if (err) console.log(err);
    else console.log(`done with task ${result}`);
  });
});
