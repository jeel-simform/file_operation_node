const fs = require("fs");

const readfile = fs.readFileSync("data.json", "utf-8");
console.log(readfile);

let data = "welcome to simform";

fs.writeFileSync("textfile.txt", data);

const readfileasync = fs.readFile("data.json", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});

const writeFileasync = fs.writeFile("text2.txt", data, (err, data) => {
  if (!err) {
    console.log("data successfully written");
  }
});

const appendFile = fs.appendFile("text2.txt", " jeel", (err, data) => {
  if (!err) {
    console.log("data append successfully");
  }
});
const readStream = fs.createReadStream("textfile.txt");
let d = "";

readStream.setEncoding("UTF8");

readStream.on("data", (data) => {
  d += data;
});

readStream.on("end", (data) => {
  console.log(data);
});

readStream.on("error", (err) => {
  console.log(err);
});

const writeDat = "hello world";

const writestream = fs.WriteStream("stream.txt");
writestream.write(writeDat, "UTF8");

writestream.end();

writestream.on("finish", () => {
  console.log("added into file");
});

writestream.on("error", (err) => {
  console.log(err);
});
