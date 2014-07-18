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
    
***Lets go line by line :***

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

###### Chat Client
**HTML**

    <html>
    	<head>
    		<script src="http://{SERVER ADDRESS HERE}:10000/socket.io/socket.io.js"></script>
    	</head>
    	<body>
    		<div id="main">
    			<form id='loginForm'>
    				<fieldset>
    					<ledgend>Login</ledgend>
    					<label for='username'>Username:</label> 
    					<input type="text" name="username" id="username" />
    					<button id="login">Log in</button>
    				</fieldset>
    			</form>
    			<section class='hidden' id='chatRoom'>
    				<textarea id="message"></textarea>
    				<button type="button" id="send">Send</button>
    				<br>
    				<div id="messages"></div>
    			</section>
    		</div>
    	</body>
    </html>

The most important thing to notice here is this line which imports the socket.io library so you can start using socket.io for websockets :

    <script src="http://{SERVER ADDRESS HERE}:10000/socket.io/socket.io.js"></script>

** CSS **

    .hidden{
        display:none;
    }
    
** JS **
###### Connecting to Server

    var socket,
        username;

    window.onload = function() {
	    document.getElementById('login').addEventListener(
		    'click',
		    function(e){
			    e.preventDefault();
		    	socket = io.connect('http://{SERVER ADDRESS HERE}:10000');
		    	username = document.getElementById('username').value;
			
		    	serverListener();
		    }
        );
    };

Since the login button is inside of a form we need to prevent the default action, which is to submit the form, we do this with the following line :

    e.preventDefault();

We connect to the Chat server with the following line

	socket = io.connect('http://{SERVER ADDRESS HERE}:10000');



###### Sending/Receiving Messages

    function serverListener() {
		document.querySelector('#loginForm').classList.add('hidden');
		document.querySelector('#chatRoom').classList.remove('hidden');
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
    
***Lets go line by line :***

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
``message`` is the name ofofofof an arbitrary event. This is not a predefined event but rather determined by the developer and used both in the server and client. You get to make these event names up yourself.  
The callback function is executed when the specified event is triggered and recieves a refrence to the ``data`` passed along with the event if any should be passed. This data can be any type, string, obj, num, int, array etc. it is decided by the developer based upon what is needed, if needed at all.

    function(data){
        console.log(data)
		io.sockets.emit('message', data);
    }
    
``io.sockets`` is an object representing *all* of the sockets connected to the server.  
``emit`` is a function which triggers an event, in this case on io.sockets or, all of the sockets connected to this server.  This will echo out any message event recieved from one socket to all of the other sockets.
  
This is all that is needed to make a basic chat server, ***Simple huh?***

---

###### Chat Client
**HTML**

    <html>
    	<head>
    		<script src="http://{SERVER ADDRESS HERE}:10000/socket.io/socket.io.js"></script>
    	</head>
    	<body>
    		<div id="main">
    			<form id='loginForm'>
    				<fieldset>
    					<ledgend>Login</ledgend>
    					<label for='username'>Username:</label> 
    					<input type="text" name="username" id="username" />
    					<button id="login">Log in</button>
    				</fieldset>
    			</form>
    			<section class='hidden' id='chatRoom'>
    				<textarea id="message"></textarea>
    				<button type="button" id="send">Send</button>
    				<br>
    				<div id="messages"></div>
    			</section>
    		</div>
    	</body>
    </html>

The most important thing to notice here is this line which imports the socket.io library so you can start using socket.io for websockets :

    <script src="http://{SERVER ADDRESS HERE}:10000/socket.io/socket.io.js"></script>

** CSS **

    .hidden{
        display:none;
    }
    
** JS **
###### Connecting to Server

    var socket,
        username;

    window.onload = function() {
	    document.getElementById('login').addEventListener(
		    'click',
		    function(e){
			    e.preventDefault();
		    	socket = io.connect('http://{SERVER ADDRESS HERE}:10000');
		    	username = document.getElementById('username').value;
			
		    	serverListener();
		    }
        );
    };

Since the login button is inside of a form we need to prevent the default action, which is to submit the form, we do this with the following line :

    e.preventDefault();

We connect to the Chat server with the following line

	socket = io.connect('http://{SERVER ADDRESS HERE}:10000');



###### Sending/Receiving Messages

    function serverListener() {
		document.querySelector('#loginForm').classList.add('hidden');
		document.querySelector('#chatRoom').classList.remove('hidden');

		socket.on(
			'message', 
			function(data) {
			    var theMessage=data.username + ' says : ' + data.message;
				
                
		    	document.getElementById('messages').innerHTML = (
					theMessage + '<br>' +
					document.getElementById('messages').innerHTML 
				);
			}
		);

		document.getElementById('send').addEventListener(
			'click',
			function(){
				document.getElementById('message').value=document.getElementById('message').value.replace(
					/[\n\r]/ig,
					'<br>'
				);
		    		
				socket.emit(
					'message', 
					{
						username: username,	
						message : document.getElementById('message').value
					}
				);

				document.getElementById('message').value='';
			}
		);
    };

We send the ``username`` and ``message`` via the ``socket.emit`` method above, and when we recieve a message, we parse it together using the data from the event.  

When we display the message, we are displaying it as HTML, so we need to convert new lines and carriage returns from the server to HTML line breaks. The below code finds these and does that with a Regular Expression.  

/.../ is the format for a RegEx.
[...] means find all the chars between the brackets
``\n`` is a new line and ``\r`` is a carriage return
after the last / you can put special notes, the ``i`` means case insensitive, which we probably don't really need here, and the ``g`` means global, so it will find all of the matches. Without ``g`` this would only replace the first match.

    document.getElementById('message').value=document.getElementById('message').value.replace(
		/[\n\r]/ig,
		'<br>'
	);

That's all there is to the client. It is quite easy to make a chat app with node.js and socket.io

#### Project
Use the example code to build a chat application that does the following :

1. Uses seperate HTML, CSS and JS files
2. Sends messages
2. Sends image URLs and displays them as an image on the other end
3. Sends a color code that will change all of the connected users background colors


> Written with [StackEdit](https://stackedit.io/).
		socket.on(
			'message', 
			function(data) {
			    var theMessage=data.username + ' says : ' + data.message;
				
                
		    	document.getElementById('messages').innerHTML = (
					theMessage + '<br>' +
					document.getElementById('messages').innerHTML 
				);
			}
		);

		document.getElementById('send').addEventListener(
			'click',
			function(){
				document.getElementById('message').value=document.getElementById('message').value.replace(
					/[\n\r]/ig,
					'<br>'
				);
		    		
				socket.emit(
					'message', 
					{
						username: username,	
						message : document.getElementById('message').value
					}
				);

				document.getElementById('message').value='';
			}
		);
    };

We send the ``username`` and ``message`` via the ``socket.emit`` method above, and when we recieve a message, we parse it together using the data from the event.  

When we display the message, we are displaying it as HTML, so we need to convert new lines and carriage returns from the server to HTML line breaks. The below code finds these and does that with a Regular Expression.  

/.../ is the format for a RegEx.
[...] means find all the chars between the brackets
``\n`` is a new line and ``\r`` is a carriage return
after the last / you can put special notes, the ``i`` means case insensitive, which we probably don't really need here, and the ``g`` means global, so it will find all of the matches. Without ``g`` this would only replace the first match.

    document.getElementById('message').value=document.getElementById('message').value.replace(
		/[\n\r]/ig,
		'<br>'
	);

That's all there is to the client. It is quite easy to make a chat app with node.js and socket.io

#### Project
Use the example code to build a chat application that does the following :

1. Uses seperate HTML, CSS and JS files
2. Sends messages
2. Sends image URLs and displays them as an image on the other end
3. Sends a color code that will change all of the connected users background colors


> Written with [StackEdit](https://stackedit.io/).