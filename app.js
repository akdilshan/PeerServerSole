

var PeerServer = require('peer').PeerServer;
//var server = PeerServer({port: 9000});
//console.log("Server Started");

var server = new PeerServer({
	port: process.env.PORT || 9000,
	key: 'peerjs'
});
console.log("Server Started");

// var fs = require('fs');
// var PeerServer= require('peer').PeerServer;

// var server=PeerServer({
//     port:9000,
//     ssl:{
//         key: fs.readFileSync('./key.pem'),
//         cert:fs.readFileSync('./cert.pem')
//     },
//     path: '/myapp'
// });
// console.log("Server Started");

server.on('connection', function(id) { 
    console.log(id);
 });

 server.on('disconnect', function(id) { 
    console.log(id);
  });
