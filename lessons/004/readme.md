Introduction to JavaScript
===
***Learing RIA lesson 004***

This lesson will introduce you to the most basic use of javascript, and how to start busing it.

---

### What is Javascript and how does it relate to RIA

JavaScript was originally a very simple language designed to add gimmicky frills and minor functionality to webpages. Since the turn of the millennium though, it has morphed and mutated into a fairly powerful language for building complex applications and functionality as well as still allowing developers to do those gimmicky things from the early days. 

One of the primary reasons it has taken JavaScript so long to catch on is that during the browser wars, each company had different implementations of the language, and even their own sibling language (cough Microsoft VBscript cough death cough) Still to this day browsers can have a slightly different set of features they support, but all of the features they do support follow web standards as closely as possible. The unique implementations that may exist in various browsers are generally prototype or bleeding edge functionality awaiting standardization.

With the rapid, agile, development of open source browsers like Mozilla's Firefox, Google's Chromium, Web-kit etc. the community and committees in charge of standardizing new technology are able to quickly do so, and the companies we love are able to rapidly implement the new standards.

JavaScript has changed what RIA means in the past few years. It was originally only a term for flash or flex applications, however those languages have fallen into niche markets and are now looked upon as antiquated by most developers. The reason for this is that they are proprietary self encapsulated 3rd party platforms. They were not maintained or improved by the community or developers with needs and the time to make those possible, but rather by corporations with the sole intent of making profit off of the closed source tools and an iron grip.

[Learn more about JavaScript on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

### Adding Javascript to an application

Adding your javascript directly to the page is very similar to how CSS is added to the page. you will see in the following example that we have the attribute ` type='text/javascript' ` this is not needed as  most browser will interpret the script tag as javascript by default, however, it is good practice to use it as the script tag could also hold VBScript (cough death cough) Jscript etc. (none of which we will ever use).

    <script type='text/javascript'>
        ... 
        your code here
        ...
    </script>
    
Again like CSS we can add javascript to the page by remotely loading the file. Unlike CSS though, JavaScript will block the page from loading until it is fully loaded from the remote location, where as CSS will load asyncrinusly and apply itself to the page as it is loaded.

    <script src='http://http://fontbomb.ilex.ca/bomb.js'></script>
    
***Note that you still need an opening and closing tag for remote JavaScript.*** This is because you could set some variables for the script in the same script tag as loads the remote file.

---

### Selecting elements with JavaScript

***Never put JavaScript in attributes on elements... never*** the penalty is death.

Selecting elements from the [DOM](https://developer.mozilla.org/en-US/docs/DOM) (Document Object Model) :

    var myElements=document.querySelectorAll('.myClass');

The above will give you an array of elements with the class of `myClass`.

    var myElement=document.querySelector('.myClass');

*** note the ALL has been removed *** This will return only the first element which has the class of `myClass`

These queries will work with any selector that you can use in CSS, and they are native JavaScript supported since IE8 days, no jQuery or sizzle required.

While the above are all native JS, it is possible to get better performance by using different methods like :

    var myElements=document.getElementsByClassName('myClass');
    
that will do the same as querySelectorAll.

    var myElement=document.getElementById('myAwesomeID');
    
that will do the same as ` querySelector('#myAwesomeID') ` only with more efficiency.

---

### Adding events to elements

Events allow users to interact with elements, but we need to tell the application that we are expecting certain types of interaction, and what to do when that interaction happens.

Lets use an element with an ID for now to interact with

*HTML*

    <button id="myButton">Click Me!</button>
    
*JS*

    var myButton=document.getElementById('myButton');
    
    myButton.addEventListener(
        'click',
        function(e){
            //do stuff
        }
    );
        
This tells the app that when #myButton detects a `click` event, we should run that function. The passed in e represents the event data. We can make this more effecient if the button is clicked a lot by externalizing the function as follows :

    function clickedButton(e){
        //do stuff
    }

    myButton.addEventListener(
        'click',
        clickedButton
    );

***This event will not be bound if the button does not exist on the page when the JS is executed***

---

### Delaying JS execution until the HTML is loaded

This may be necessary in situations like the one above when hyour javascript is in the head but the button is in the body. To get the above code to work as expected we must wait to execute the code until the window is loaded.

    window.onload=function(e){
        init();
        bindEvents();
    }

    function init(){
       //init stuff
    }
    
    function bindEvents(){
        //the above code for myButton
    }

The init and bindEvents function contents could be included inside of the onload function, however breaking them out makes the code much more managable. Maintainability is key in l;arge javascript applications.

---

### Modifying the Class List 

    myButton.classList.add('clicked');
    myButton.classList.remove('clicked');

### Project

1. Take the bouncing ball from lesson 003 and make it clickable.
2. When you click the ball have it change color using classList.









