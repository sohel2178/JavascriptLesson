// const fs = require("fs");

// const lineReader = require("line-reader");

// console.log(fs);

// fs.unlink("./test/tmp", err => {
//   if (err) throw err;
//   console.log("successfully deleted /test/tmp");
// });

// fs.rename("./test/sohel", "./test/Masum", err => {
//   if (err) throw err;
//   console.log("renamed complete");
// });

// fs.stat("./test/Masum", (err, stats) => {
//   if (err) throw err;
//   console.log(`stats: ${JSON.stringify(stats)}`);
// });

// lineReader.eachLine("./test/Masum/test.txt", function(line, last) {
//   console.log(line);
//   // do whatever you want with line...
//   if (last) {
//     // or check if it's the last one
//   }
// });

// var fs = require("fs");
// fs.writeFile("./test/Masum/test2.txt", "new data", function(err) {
//   if (err) {
//     // append failed
//   } else {
//     // done
//   }
// });

const dns = require("dns");

// dns.lookup("facebook.com", (err, address, family) => {
//   console.log("address: %j family: IPv%s", address, family);
// });

// console.log(dns.getServers());

const os = require("os");
const path = require("path");

// console.log(os.userInfo());

// process.env.PATH.split(path.delimiter).forEach(item => {
//   console.log(item);
// });

// console.log(
//   path.dirname("C:\\Users\\sohel\\AppData\\Local\\Android\\Sdk\\platform-tools")
// );

// const http = require("http");

// http
//   .createServer(function(request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     // Send the response body as "Hello World"
//     response.end("Hello World\n");
//   })
//   .listen(5000);

let x = 0;
let dx = 10;

function printHello() {
  //   console.log("Hello, World!");

  x = x + dx;
  console.log(x);

  if (x >= 1920 || x <= 0) {
    dx = -dx;
  }

  setTimeout(printHello, 10);
}

// Now call above function after 2 seconds
setTimeout(printHello, 10);
