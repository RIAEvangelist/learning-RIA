Basic RIA App CSS Knowledge
===
***Learing RIA lesson 002***

In this lesson we will cover the basics of CSS. CSS stands for Cascading Stryle Sheet. CSS allows you to make things look pretty, fancy, smart, minimalistic, ugly etc. depending on what you do and how you use it. CSS will even let you do animations.


### Basic App Structure in CSS
---

#### Basic app setup

    html,
    body{
    	min-width:100%;
        min-height:100%;
        margin:0;
    }
    
    body *{
    	position:relative;
    }
    
---
### The basics on CSS Selectors
Selectors are ways that you can find or specify elements on which you would like to apply css styling. Any tag name by itself is a selector. Any selector seperated by a space from the previous selector will try to match elements which are decendants of the first selector.

| selector | selects |
|----------|---------|
| `tag` | targets elements of that tag |
| `tag1` `tag2` | selects all `tag2`s which are decndants of `tag1` |
| `tag1` > `tag2` | selelcts all `tag2`s that are immediate children of `tag1` |
| .`class` | selects all elements having a class type of `class` |
| `tag`.`class`| selects all `tag`s having a class type of `class` |
| `tag`:hover | selects a `tag` only when it the mouse `hover`s over it |

---


#### Examples : 

    a{
        //css stuff
    }

would effect all links. To effect only links that are decendants of divs, you would use the following syntax :

    div a{
        //css stuff
    }

To effect only immediate children of divs you would

### Some basic CSS properties
Properties are things you can control. You set their values and it will change the way things are styled. You can see more about CSS properties on the [MDN CSS Refrence](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

properties are key value pairs like ` font-size : 16px `


| property | definition |
|----------|------------|
| color    | Sets the color of text |
| background-color | Sets the color of the element background |
| opacity  | Sets the opacity of an element which will effect its children |
| font-family | Sets the font to use for all text within the element |
| font-size   | Sets the size of the text |
| font-weight | Sets the weight/strength/thickness/boldness of text |
| text-align  | Sets the text to align left, right, center, or justify |
| cursor   | Sets the tyoe of cursor shown. |
| display  | Sets how the item is displayed in the design. visible, hidden, or none |
| position | How an element and it's parent are related spacially |
| width    | the width of the element itself. This only works with "box" elements |
| height   | the height of the element itself This only works with "box" elements|
| float    | a strange rule that allows an element to stay to one side or the other and allows other elements to flow around it. This causes the dom to think the floated element has no height, so beware. |
| padding  | adds space to the inside edges of an element |
| margin   | adds space outside the edges of the element |
| border   | creates a border around the edges of the element |
| border-radius | rounds the edges of the border |

---

## Project

1. Create a screen that fills the page.
2. Give the screen a header and a footer that are stuck to the top and bottom respectively.
3. Give the header and footer the same background color and make them 40 pixels tall.
4. Put some centered text in the header and footer.
5. Give the non header footer part of the screen a different color.
6. Put some text into the the non header footer area make sure it is not right up against the edge of the screen, it should have some space.
7. When you mouse over the footer make it change color.
