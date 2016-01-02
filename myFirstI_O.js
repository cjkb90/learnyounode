var fs = require('fs');

var body = fs.readFileSync(process.argv[2]);
var bodyArr = body.toString().split("\n");
console.log(bodyArr.length -1);