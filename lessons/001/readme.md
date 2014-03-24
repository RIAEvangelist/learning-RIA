Basic RIA App Knowledge
===
***Learing RIA lesson 001***

In this lesson we will cover the basics of HTML, CSS, Javascript 


### Basic App Structure in HTML
---

#### Basic app setup

    <!DOCTYPE HTML>
    <html>
        <head>
            //stuff to do || load before the page content loads
        </head>
        <body>
            //content
        </body>
    </html>
    
### Some basic HTML tags or elements

`Tag` is a term referred to the text used to start an HTML `element`. Often times the words `tag` or `element` are used interchangeably. The following tags are formatted as :  
< `tag` > CONTENT </ `tag` >  
There are many more HTML tags than those listed below, but for now these are the ones we will be focusing on. If you would like to look at more detailed lists you can check out the [MDN HTML Element List](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list). You will find [The MDN](https://developer.mozilla.org/) or Mozilla Developer Network will be an invalusable tool in the learning process and is very important even for the most experienced developers.


|  tag  |  purpose  |
|-------|-----------|
| html  | denotes the app is html |
| head  | where stuff that should be loaded or executed before the content of a document is completely rendered. All CSS and Javascript required for basic app functionality should be loaded here. |
| body  | where the content of the app goes |
| header| The app header, there should only be one of these |
| nav   | The app nav, ideally there should only be one of these |
| footer| The app footer |
| section| Denotes a section of the app in which all contents of the section are related, and most likely different from other sections. |
| div   | a division or block of content in the app. this is simlar to section, header, footer etc, but with no simantic meaning |
| p     | denotes a paragraph |
| ul	| unordered, or bullet list |
| ol	| ordered, or numbered list |
| li    | list item for either UL or OL |
| h1, h2 etc. | a heading, generally used for text. |
| span  | a section of text different from the surrounding text in which it resides. |
| a     | a link or anchor |
| strong| denotes important content and emboldens text. |
| em    | denotes text deserving emphisys, and italicises it. |

### Basic HTML Tag useage examples 

`li ` - list items

    <li>
        //this is a list item
    </li>
---
` ul ` - unordered lists, bulleted lists  

    <ul>
        <li>
            //this is a bulleted list item
        </li>
        <li>
            //this is another bulleted list item
        </li>
    </ul>
---
` ol ` - ordered lists, numbered lists  

    <ol>
        <li>
            //this is a numbered list item
        </li>
        <li>
            //this is another numbered list item
        </li>
    </ol>
---
` p ` - paragraph

    <p>
        //some text
    </p>
---
` h1 `, ` h2 `, ` h3 `, ` h5 `, ` h6 ` - various header text types by importance, h1 is the most important.

    <h1>
        //This is the header
    </h1>
---
` span ` - a small section of text to be treated differently than text out side of it.

    <p>
        Hello World, this <span> is wonderful </span>
    </p>
---
` div ` - Division, or part of somrthing larger like the page body or section or other element.
sic HTML tags

`li ` - list items

    <li>
        //this is a list item
    </li>
---
` ul ` - unordered lists, bulleted lists  

    <ul>
        <li>
            //this is a bulleted list item
        </li>
        <li>
            //this is another bulleted list item
        </li>
    </ul>
---
` ol ` - ordered lists, numbered lists  

    <ol>
        <li>
            //this is a numbered list item
        </li>
        <li>
            //this is another numbered list item
        </li>
    </ol>
---
` p ` - paragraph

    <p>
        //some text
    </p>
---
` h1 `, ` h2 `, ` h3 `, ` h5 `, ` h6 ` - various header text types by importance, h1 is the most important.

    <h1>
        //This is the header
    </h1>
---
` span ` - a small section of text to be treated differently than text out side of it.

    <p>
        Hello World, this <span> is wonderful </span>
    </p>
---
` div ` - Division, or part of somrthing larger like the page body or section or other element.

    <div>
        <h1>
            //This is the header
        </h1>
    	<p>
            //some text
        </p>
        <ul>
            <li>
                //this is a bulleted list item
            </li>
            <li>
                //this is another bulleted list item
            </li>
        </ul>
    </div>
---
` header ` - the app header area, may contain divs or other tags. Behaves the same as a div. The difference is merely simantics and standards compliance.

	<header>
       //header stuff
	</header>
---
` section ` - a section of an app which is different from other sections. Behaves the same as a div. The difference is merely simantics and standards compliance.

	<section>
        //some stuff
    </section>
---
` nav ` - The app navigation, often in the header, and often contains ul or ol lists.

    <nav>
        //nav stuff here
    </nav>
