var express = require('express');
var Mongo = require('mongodb');
var monk = require('monk');
var app = express();

app.use(express.static(__dirname+'/public'));

var db =monk('mongodb://funnyfork:gmeitw@ds031581.mongolab.com:31581/wingsoffire');

app.get('/database',function(req,res)

{

	console.log("You're trying to access my database ")
	
	//var db =monk('mongodb://127.0.0.1:27017/test');
	var collections = db.get('usercollection');
	collections.find({},function(err,doc){
		res.send(doc)
	})
})
app.get('/navigation',function(req,res)

{

	console.log("You're trying to access my navigation database ")
	
	//var db =monk('mongodb://127.0.0.1:27017/test');
	var collections = db.get('navigation');
	collections.find({},function(err,doc){
		res.send(doc)
	})
})

app.get('/projlist',function(req,res)

{

	console.log("You're trying to access my navigation database ")
	
	
	var collections = db.get('projectList');
	collections.find({},function(err,doc){
		res.send(doc)
	})
})

app.listen(80)
console.log("On at 8080")
