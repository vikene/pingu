var express= require('express');
var stylus = require('stylus');
var nib = require('nib');
var bodyparser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var routes = require('./routes/index');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


function compile(str,path){
	return stylus(str)
	.set('filename',path)
	.use(nib());
}

app.set('views',__dirname+'/views');
app.set('view engine','jade')

app.use(stylus.middleware({
	src: __dirname +'/public'
	, compile: compile
}))

app.use(express.static(__dirname + '/public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
	extended: true
}))

app.use(function(req,res,next){

	next();
})

app.use('/',routes);
io.on('connection',function(socket){

console.log("conn")
	socket.on('orient',function(msg){

		console.log('orient data '+ parseInt(msg));
		io.emit('movebg',msg);
	})
})
http.listen(5394);