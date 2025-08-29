1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById("id") → finds a single element by its id. It always returns only one element.

getElementsByClassName("class") → finds all elements with that class and gives back a list (HTMLCollection).

querySelector("selector") → finds the first element that matches a CSS selector (like .class, #id, div p).

querySelectorAll("selector") → finds all elements that match a selector and gives back a NodeList.

2.
How to create and insert a new element into the DOM?
Use document.createElement("tagName") to make a new element.

Add text with element.textContent = "Hello" or attributes like element.id = "newId".

Insert it into the page using appendChild() or insertBefore() on some parent element.

3. What is Event Bubbling and how does it work?
   Event bubbling means when an event happens on an element (like clicking a button), the event first runs on that element, then moves up (bubbles) to its parent,
   then grandparent, and so on until it reaches document. For example, if you click a button inside a div, the button’s event runs first, then the div’s click event runs, then the body, and so on.

 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is when you don’t attach an event listener to every child element, but instead put a single listener on a parent element and use event bubbling to catch events.

For example, instead of putting onclick on every list item, you add one click listener to the ul and check which child was clicked using event.target.
It’s useful because:

Less memory (fewer listeners).

Works even for new elements added later.


5. Difference between preventDefault() and stopPropagation()

preventDefault() stops the browser’s default action. Example: prevent a form from submitting, or a link from opening.

stopPropagation() stops the event from bubbling up to parent elements.

Example: If you click a link inside a div:

preventDefault() will stop the link from opening.

stopPropagation() will stop the click event from reaching the parent div.  
