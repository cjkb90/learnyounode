var num = 0;
process.argv.slice(2).forEach(function(element){
  num+=parseInt(element);
});
console.log(num);