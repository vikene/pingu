var express = require('express')
var bodyparser = require('body-parser')
var app = express()
var fs = require('fs')

app.use(bodyparser())
app.get('/',function(req,res){
var uname = req.param('uname');

	var pass = req.param('pass');
	if(uname == "anirud" && pass=="yoyo")
	{
	var dir = req.param('directory');
	
	var file = req.param('filename') + '.'+req.param('exten');
	var tobe = __dirname+"/"+dir+"/"+file
	fs.lstat(tobe,function(err){
		if(err)
		{
			res.send("error , File not found")
		}
		else{
			fs.readFile(tobe,function(err,data){
				
				res.send(data)
			
			})
		}
	
	})
		
	}
	else{
		res.send("Authentication Failure, Check you're credientials ")
	}
})

app.post('/', function(req,res){
	var uname = req.body.uname;
	var pass = req.body.pass;
	if(uname == "anirud" && pass=="yoyo")
	{
	var dir = req.body.directory;
	
	var file = req.body.filename + '.'+req.body.exten;
	var tobe = __dirname+"/"+dir+"/"+file
	fs.lstat(tobe,function(err){
		if(err)
		{
			fs.mkdirSync(dir);
			fs.writeFile(tobe, req.body.content,function(err){
	
		if(err)
		{
			res.send(err)
		}
		else{
		
		res.send("Uploaded Successfully")
		}
	})
		}
		else{
		
		fs.writeFile(tobe, req.body.content,function(err){
	
		if(err)
		{
			res.send(err)
		}
		else{
		
		res.send("Uploaded Successfully")
		}
	})
		
		}
	} )
	
	
	
	console.log(req.body.data)
	
	}
	else{
		res.send("Authentication Failure, Check you're credientials ")
	}
})


app.listen(8000)
