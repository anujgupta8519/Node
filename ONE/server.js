console.log("Hello World");
const os = require('os')
console.log(os.type());
console.log(os.version());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(__dirname);
console.log(__filename);
const path = require('path');
console.log(path.parse(__filename));
console.log(path.extname(__filename));
console.log(path.dirname(__filename));
const {add,sub,multiply,divide} = require('./math')
console.log(add(2,3));
console.log(sub(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
