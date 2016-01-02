var fs = require('fs');
fs.readFile(process.argv[2], function(err, contents) {
  var bodyArr = (contents.toString().split("\n"));
  console.log(bodyArr.length-1);
});
