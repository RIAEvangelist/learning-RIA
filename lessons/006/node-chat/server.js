var io = require('socket.io').listen(10000);

console.log('server started');

io.sockets.on(
	'connection', 
	function(socket) {
		console.log('connection detected');
    	socket.on(
		    'message', 
		    function(data){
		        console.log(data)
        		io.sockets.emit('message', data);
    		}
		);
	}
);
