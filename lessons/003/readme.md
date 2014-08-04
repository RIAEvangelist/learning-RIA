RIA CSS Best Practices
===
***Learing RIA lesson 003***

This lesson is primarily to build upon the CSS skills you learned in lesson 002.


External Stylesheets
---

To properly use CSS without making HTML documents cumbersome and difficult to read, the best practice is to utilize *external stylesheets*. You can do this by adding a `link` element with a *rel* attribute of *stylesheet* to the `head` tag. 

This will keep your document clean and allow you to include multiple CSS files. You might want to include more than one css file in order to keep CSS for stand alone modules seperate. You must remember though that CSS files are cascading just like the CSS inside of them, so order is important.

Another benifit to using these external stylesheets is reusability.

    <head>
        <link rel='stylesheet' href='css/myApp.css' />
        <link rel='stylesheet' href='css/myLogin.css' />
        <link rel='stylesheet' href='css/myWelcomeScreen.css' />
    </head>
    

Classes
---

Classes are ways CSS can identify elements to apply styles to them. This is very simple to do by applying an attribute of *class* to any element. When identifying elements with CSS, you should never use IDs, always use classes or some other combination of identifying attributes of an element. The reason to never use IDs in css is because they are supposed to be unique (Javascript requires this). However CSS will not treat them as unique instances which makes it easy to create CSS Javascript conflicts. People often times will just add another element with the same ID inorder to get the CSS styles they want. ***THIS IS BAD*** because if Javascript is using that ID, the app will suffer unexpected consequences.
    
    <style>
        //BAD
        #theBestParagraphEver{ ... }
    
        //GOOD
        .specialParagraph{
            font-weight:bold;
        }
    </style>
    
    <p id='theBestParagraphEver' class="specialParagraph">
        Hello World
    </p>
    
CSS Transitions
---

Transitions are used to gradually change the value of a css rule over time otherwise known as animation. Using this sort of CSS animation is the best looking end result. Many frameworks and developers do animations with Javascript, but the JS approach is slower and less smooth.

You can transition any CSS rule, like font-size, width, height, color etc.
    
    <style>
      .movingDiv{
          width:50px;
          height:50px;
          background-color:rgb(255,0,0);
          transition: width 500ms, height 500ms; background-color 500ms; 
      }
      .movingDiv:hover{
          width:100px;
          height:500px;
          background-color:rgb(255,100,255);
      }
    </style>
    
    <div class="movingDiv">
    
    </div>
    
Project
---

Create a css ball that bounces when you hover over it, kind of like you are dribbling a basketball.
