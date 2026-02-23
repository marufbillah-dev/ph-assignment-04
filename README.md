# Questions and Answers:

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer:
getElementById: select one element by its id and id must be unique.
example:
```
const title = document.getElementById("main-title");
```
its returns a single element.

getElementsByClassName: select elements by class name, can return many elements because class can be uses as many I want.
example: 
```
const cards = document.getElementsByClassName("card");
```
its returns a HTMLCollection (looks like array but not real array).

querySelector: select the first matching element using css selector.
example: 
```
const card = document.querySelector(".card");
```
its returns first match only.

querySelectorAll: select all matching elements using css selector.
example: 
```
const allCards = document.querySelectorAll(".card");
```
its retuns a NodeList.

## 2. How to create and insert a new element into DOM?

### Answer: create an element, add content to the element and insert into page. example below:
// 1. create an element
```
const newDiv = document.createElement("div");
```

// 2. add content to the new element
```
newDiv.textContent = "Hello I am new here";
```

// 3. insert the new element into body by using appendChild()
```
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling? How it works?
### Answer:
event bubbling means the event goes from child to parent then go up.

example:
```
<div id="parent">
  <button id="child">Click</button>
</div>
<script>
  document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
</script>
```
output when button click:
```
Button clicked
Parent clicked
```

## 4. What is Event Delegation? Why useful?
### Answer:
event delegation means I add event to parent, not every child.
example:
```
document.getElementById("list").addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Item clicked:", event.target.textContent);
  }
});
```
note: if I add a new ````<li>```` later, it still works.

its useful beause, works for dynamic elements and codebase remains cleaner.

## 5. Difference between preventDefault() and stopPropagation()
### Answer:
preventDefault(): its stops browser default behavior.
example: stop form submit
```
form.addEventListener("submit", function(e) {
  e.preventDefault();
});
```
now form will not reload page.

stopPropagation(): its stops event bubbling.
example:
```
child.addEventListener("click", function(e) {
  e.stopPropagation();
});
```
now parent click will not run.
