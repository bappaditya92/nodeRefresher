//Npm module
// const color = require("cli-color");
// console.log(color.blue("hello"));

//local module

//const auth = require("./auth");

//register("bappaditya");

// auth.register("Bappaditya");
// auth.login("aditya");

const path = require("path");

//dirname
// console.log("Folder name: ", path.dirname(__filename));

//filename
//console.log("File name: ", path.basename(__filename));

//Extension
//console.log("Ext name: ", path.extname(__filename));

//parse
//console.log("parse name ", path.parse(__filename));

//join
//console.log("join: ", path.join(__dirname, "order", "app.js"));

//File system
const fs = require("fs");

//make a directory
// fs.mkdir(path.join(__dirname, "/test1"), (err) => {
//   if (err) {
//     console.log("something went wrong...");
//     return;
//   }
//   console.log("folder created successfully");
// });

// fs.writeFile(
//   path.join(__dirname, "test", "test1.txt"),
//   "Inside the test file\n",
//   (err) => {
//     if (err) {
//       console.log("Something went wrong");
//     }
//     fs.appendFile(
//       path.join(__dirname, "test", "test1.txt"),
//       "That is the append section",
//       (err) => {
//         if (err) {
//           console.log("something went wrong in append section...");
//         }
//         console.log("Append successful");
//       }
//     );
//     console.log("File created succesfully");
//   }
// );

//read a file

// fs.readFile(path.join(__dirname, "test", "test1.txt"), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const content = Buffer.from(data);
//   console.log(content.toString());
// });

// fs.readFile(path.join(__dirname, "test", "test1.txt"), "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

//os module

const os = require("os");

// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
//console.log(os.totalmem());
//console.log(os.uptime());

//Events module

const Emitter = require("events");

//const myEmitter = new Emitter();
// myEmitter.on("somename", (data) => {
//   console.log(data);
// });
// myEmitter.emit("somename", {
//   name: "Bappaditya"
// });

// class Auth extends Emitter {
//   register(username) {
//     console.log("register successfully...");
//     this.emit("register", username);
//   }
// }

// const auth = new Auth();
// //listen

// //verify email
// auth.on("register", (data) => {
//   console.log(`sending email to ${data}`);
// });
// auth.on("register", (data) => {
//   console.log(`sending image to ${data}`);
// });

// auth.register("bappaditya");

//http module
