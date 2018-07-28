# # Utilizing browser's Local Storage and working with Event Delegation

# TIL:

#### 1. SVG - language for describing 2D graphics in XML.

- Each drawn shape is remembered as an obj- it's elements are available inside SVG DOM
- Canvas, in contrast, draws 2D graphics on the go with JS (pixel by pixel) and browser forgets shapes once drawn, unlike SVG.

#### 2. Local Storage - stores data in objects in user's browser and stays there when page is refreshed (no expiration date).

- sessionStorage, in contrast, saves data and gets cleared when the page is closed.
- In order to add obj/array into local storage, you must first JSON.stringify() it.
- In order to remove obj/array from local storage, you must first JSON.parse() its string.
- everytime change in a list needs to be made, mirror that to the local storage & then re-render that list/item.

#### 3. Event Delegation - known as 'responsible parents', when children are 'click'ed, pass event to them.

- an event listener is attached to parent element that then passes them to its children 'matching' the selector, even if they exist already or are added in the future.
  - _event.target.matches('selector')_
  - matches() is a new API in browser.
