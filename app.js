var express = require('express');
var Mongo = require('mongodb');
var monk = require('monk');
var app = express();
var fs= require('fs')
var count = 0;

app.use(express.static(__dirname+'/public'));

var db =monk('mongodb://funnyfork:gmeitw@ds031581.mongolab.com:31581/wingsoffire');

app.get('/dhole/picofday.jpg',function(req,res){

	fs.readFile('picofday.jpg', function(err, data) {
  if (err) throw err;
 var collection = db.get("count");
   
    collection.find({}, function(err,doc){
        if(doc[0]!=null)
        {
            var dat = parseInt(doc[0].pgcount) +1;
            
            var json_obj ={ "pgcount": dat };
            collection.update({},{"pgcount":dat});
            console.log(json_obj)
        }
        else{
            collection.insert({"pgcount":0}) //init database
        }
    
    })
  
  console.log("Access")


   
    res.send(data);
  
 
});
})


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
