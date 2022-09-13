let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (request, response) {
   response.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];
io.sockets.on('connection', function(socket) {
   console.log("Успішне під'єднання");
   connections.push(socket);

   socket.on('disconnect', function(data) {
      connections.splice(connections.indexOf(socket), 1);
      console.log("Від'єднання");
   });

   socket.on('send_mess', function(data) {
      io.sockets.emit('add_mess', {msg: data.msg, name: data.name, className: data.className})
   });

});