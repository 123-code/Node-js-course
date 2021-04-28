const person = require("./Person");
console.log("Hello!");
const person1 = new person("Jose",78);
person1.greeting();


const os = require('os');
console.log(os.platform());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.uptime());
