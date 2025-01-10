# DOM - Document Object Model

- The *DOM* is a tree-like representation of the contents of a webpage.


## Targeting nodes with selectors

- When working with the DOM, you use **selectors** to target the nodes you want to work with.

- For Example `<div class="display"></div>`;
1. `div.display`
2. `.display`
3. `#container > .display`
4. `div#container > div.display`

**[Note]** - In the `<script>` tag the selectors you see is mostly used as below...
```js
const container = document.querySelector("#container");
```

## DOM Methods

- When your HTML code is parsed by a web browser, it is converted to the DOM.

**[Note] - Query Selectors**

- `element.querySelector(selector)` - returns a ref to the first match of *selector*.
- `element.querySelectorAll(selectors` - returns a *NodeList* containing ref. to all of the matches of the *selectors*.

- *Here, the returned value is **Not** an array*. If problems arises, then convert this *nodelist* to array with `Array.from()` OR *spread operator*.


### Element Creation ( A nice topic!!!)

- `document.createElement(tagName, [options])` - creates a new element.
- For example: `const div = document.createElement("div")`
- This function does **NOT** put your new element into the DOM - it actually creates it in memory.

Now, for placing element in DOM...

### Append elements

- `parentNode.appendChild(childNode)` - appends *childNode* as the last child of *parentNode*.
- `parentNode.insertBefore(newNode, referenceNode)` - inserts newNode into parentNode before refernceNode.

### Remove elements

- `parentNode.removeChild(child)` - removes *child* from parentNode on the DOM and returns a reference to child.

## Altering elements

- When you have a reference to an element, you can use that reference to alter the element's own properties.

### Adding inline style

- `div.style.color = "blue"`;
- `div.style.cssText = "color: blue; background: white;"`;
- `div.setAttribute("style", "color: blue; background: white;");`

### Editing Attributes

- `div.setAttribute("id", "theDiv")` // if id exists, update it to the "theDiv", else create an id with value "theDiv".
- `div.getAttribute("id")` // returns the specified attributes, in this case "theDiv".
- `div.removeAttribute("id")` // removes specified attributes.

### Working with classes

- `div.classList.add("new")` // add class 'new' to your div.
- `div.classList.remove("new")` // removes 'new' class from div.
- `div.classList.toggle("active")` // if div doesn't have this 'active' class then add it, and if have then remove it.

### Adding text content

- `div.textContent = "Hello World!` // creates a text node containing "Hello World!" and inserts it in div.

### Adding HTML content

- `div.innerHTML = "<span>Hello World!</span>`;

[NOTE] - using `textContext` is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potentional security risks.

- Here, Keep in mind that JavaScript does *not* alter your HTML, but the DOM. Your HTML file will look the same, but the Js changes what the browser renders.


