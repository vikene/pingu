var express = require('express')
var router = express.Router();

router.get('/',function(req,res){

	
	res.sendFile(__dirname+'/public/index.html');
})

router.get('/view',function(req,res){

dat= req.param('id');
	console.log(dat)
	res.sendFile(__dirname+'/view.html');
})


module.exports = router;