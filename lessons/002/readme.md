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
| `tag` : `psudo-selector` | selects all `tag`s which also match the `pseudo-selector` an example is `a:hover` which means all links when the mouse is hovering them. |
| [`attr`] | Selects all elements which have an attribute of `attr` set. *** this should never be used because it is horribly inefficient ***|
| `tag`[`attr`] | selects all `tag`s which have an attribute of `attr` set |
| `tag`[`attr`="value"] | selects all `tag`s which have an attribute of `attr` set to "value" |
| .`class` | selects all elements having a class type of `class` |
| `tag`.`class`| selects all `tag`s having a class type of `class` |
| #`id` | selects all elements with an id of `id` *** this course reccomends you do not ever use ids in CSS because there should only ever be one insytance of an ID on a page. The CSS implementation will allow developers to erroniously use the same ID multiple times to achive a certain look when they should be using classes instead. This can cause SEO and Javascript errors. Not to menltion it is not symantic ***|
| `tag`#`id` | selects all `tag`s with an id of `id` *** this course reccomends you do not ever use ids in CSS because there should only ever be one insytance of an ID on a page. The CSS implementation will allow developers to erroniously use the same ID multiple times to achive a certain look when they should be using classes instead. This can cause SEO and Javascript errors. Not to menltion it is not symantic ***|
| * | selects all elements |
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
| opacity  | Sets the opacity of an element which will effect its children |
| font-family | Sets the font to use for all text within the element |
| font-size | Sets the size of the text |
| font-weight | Sets the weight/strength/thickness/boldness of text
| cursor   | Sets the tyoe of cursor shown. |
| display  | Sets how the item is displayed in the design. visible, hidden, or none.
| position | How an element and it's parent are related spacially |

---

## Project

