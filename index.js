var app  = require("express")();
var http = require("http").Server(app);
var io   = require("socket.io")(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('um usuario conectou');
	socket.on('disconnect', function(){
		console.log('um fdp desconectou');
	});
	socket.on('chat message', function(msg){  
		console.log('message: ' + msg);
	});
});

http.listen(3000, function(){
	console.log('Servidor rodando na porta 3000');
});