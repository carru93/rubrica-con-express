var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));	
	});

var server = app.listen(8080, function(req,res){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Il server è aperto su http://%s%s",host,port);
	});
