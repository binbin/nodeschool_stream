// var through = require('through')

// var tr = through(function(tunk){
// 	this.queue(tunk.toString().toUpperCase())
// })
// process.stdin.pipe(tr).pipe(process.stdout)

var map = require('through2-map')
process.stdin.pipe(map(function(chunk) {
	return chunk.toString().toUpperCase()
})).pipe(process.stdout)