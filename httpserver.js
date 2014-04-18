var http = require('http')
var through =require('through')


var server = http.createServer(function(req,res){
  if(req.method === 'POST'){
  	   req.pipe(through(function(chunk){
	   	  this.queue(chunk.toString().toUpperCase()) 
	   })).pipe(res)
  }
})
server.listen(process.argv[2])