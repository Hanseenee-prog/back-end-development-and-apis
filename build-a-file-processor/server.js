const fs = require('fs');

const data = fs.readFileSync("assets/poem.txt", {encoding: "utf-8"});

fs.readFile("assets/poem.txt", { encoding: "utf8" }, (err, data) => {
  // console.log(data);
});

const fsPromises = require("fs/promises");

async function main() {
  const data = await fsPromises.readFile("assets/poem.txt", {
    encoding: "utf8",
  });
  // console.log(data);
}

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");

fs.appendFileSync("assets/output.txt", "\nSecond line");

const exists = fs.existsSync("assets/output.txt");
console.log(exists);

const entries = fs.readdirSync("assets");
console.log(entries);

const buf = Buffer.from("Hello, Node!");

console.log(buf.toString("hex")); // 48656c6c6f
console.log(buf.toString("utf8"));
console.log(buf.toString("ascii")); // 48656c6c6f
console.log(buf.toString("base64"));

console.log(Buffer.alloc(8, 0xff));

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("hello").digest("hex");
console.log(hash); 

const random = crypto.randomBytes(16).toString("hex");
console.log(random);

const id = crypto.randomUUID();
console.log(id);

const os = require('os');
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());
console.log(os.cpus().length);

const path = require('path');
console.log(path.basename('assets/poem.txt'));
console.log(path.dirname('assets/poem.txt'));
console.log(path.extname('assets/poem.txt'));

console.log(path.join("assets", "..", "server.js")); // assets/../server.js → assets/../server.js (relative)
console.log(path.resolve("assets", "..", "server.js")); 

const parts = path.parse("/home/user/assets/poem.txt");
console.log(parts);

console.log(process.version)
console.log(process.platform)
console.log(process.env.NODE_ENV)
console.log(process.argv)

process.stdout.write("Hello from stdout \n");
process.stderr.write("Hello from stderr \n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});

const writable = fs.createWriteStream("assets/stream-output.txt");

readable.pipe(writable);
