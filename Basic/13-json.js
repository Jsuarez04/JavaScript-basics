// import fs from "fs";

// let data = fs.readFileSync("./hello-javascript/Basic/superheroes.json", "utf8");
// // console.log(data);

// let members = JSON.parse(data).members;

// // console.log(members);
// // for (let member of members) {
// //   console.log(member.age);
// // }

// console.log

const data = require("./superheroes.json");

console.log(data.members);
