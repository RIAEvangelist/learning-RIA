User Media in RIA
===
***Learing RIA lesson 006***

Web Sockets
---

HTML5 introduces native websocket technology. It allows real time data transmission with both push and pull capabilities from the server and client. This is great for communication apps, multiplayer games, or dashboards that display real time data.

#### Requirements
For this lesson you will need
1. Node JS or NVM
    a. npm which normally comes with node or NVM
2. socket.io

---

#### Chat Application Example
###### Why start with Socket.io

Socket.io is a library that normalizes web socket protocalls across all types of devices and browsers. This will allow us to code one time for many devices and not have to worry if they support native web sockets.

###### Chat Server

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
    
***Lest go line by line :***

    var io = require('socket.io').listen(10000);
    
This pulls in Socket.io and starts a socket server on port 10000. On this port The server will be listening for all types of incoming socket connections as well as hosting the socket.io browser library for the client to use.

    io.sockets.on(
    	'connection', 
    	function(socket) {
            ...
        }
    );
    
``io.sockets`` is an object representing *all* of the sockets connected to the server.  
``on`` binds an event listener to this object  
``connection`` is the event fired any time a new socket connects  
the function is what is executed each time a new socket connects and it recieves a refrence to the new ``socket`` as an argument.

    function(socket) {
		console.log('connection detected');
    	socket.on(
		    'message', 
		    function(data){
		        ...
    		}
		);
	}

``socket.on`` binds an event to the new socket refrence  
``message`` is the name of an arbitrary event. This is not a predefined event but rather determined by the developer and used both in the server and client. You get to make these event names up yourself.  
The callback function is executed when the specified event is triggered and recieves a refrence to the ``data`` passed along with the event if any should be passed. This data can be any type, string, obj, num, int, array etc. it is decided by the developer based upon what is needed, if needed at all.

    function(data){
        console.log(data)
		io.sockets.emit('message', data);
    }
    
``io.sockets`` is an object representing *all* of the sockets connected to the server.  
``emit`` is a function which triggers an event, in this case on io.sockets or, all of the sockets connected to this server.  This will echo out any message event recieved from one socket to all of the other sockets.
  
This is all that is needed to make a basic chat server, ***Simple huh?***

---

#### Project
Use the example code to build a chat application that does the following :

1. Sends messages
2. Sends image URLs and displays them as an image on the other end
3. Sends a color code that will change all of the connected users background colors


> Written with [StackEdit](https://stackedit.io/).