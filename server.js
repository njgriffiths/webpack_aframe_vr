var port = 3000;
var fs = require('fs');
var http = require('http');
var https = require('https');

// SSL
var privateKey  = fs.readFileSync('assets/key.key', 'utf8');
var certificate = fs.readFileSync('assets/cert.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};


// express app
var express = require('express');
var app = express();
app.use(express.static('public'));

// webserver (AR requires SSL)
var httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, function() {
	console.log('HTTPS server is up on port ' + port);
});