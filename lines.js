var split = require('split')
var through = require('through')
var i=0

process.stdin.pipe(split()).pipe(through(function(line){
	if(i%2!==0){
		this.queue(line.toString().toUpperCase()+'\n')
	}else{
        this.queue(line.toString().toLowerCase()+'\n')
	}
	i++
	// console.log(line.toString())
})).pipe(process.stdout)