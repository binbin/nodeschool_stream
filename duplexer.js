var spawn = require('child_process').spawn

var duplexer = require('duplexer')


module.exports = function(cmd,args){

	var c = spawn(cmd,args)

	return duplexer(c.stdin, c.stdout)
}