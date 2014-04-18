var concat = require('concat-stream')

process.stdin.pipe(concat(function(s){
   	console.log(s.toString().split("").reverse().join(""))
}))//.pipe(process.stdout)