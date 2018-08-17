## Create a navbar with sleek dropdown items

User can hover over items on the nav bar and a dropdown menu appears with an ease of transitions between items

# TIL:

#### 1. _this_ changes delegation depending on type of function

- When entering _this_ into a function inside a function, it stays locally to that function; however, if entered into an arrow function, then value of _this_ is inherited from parent function.

#### 2. getBoundingClientRect() (Coordinates) not only from specific dropdown menus, but for nav bar as well

- because the dropdown coordinates are set relative to where it is on the page and not always anchored to the top of page. (doesn't take nav bar into account)
- so we offset the dropdown coords by subtracting from the nav coords
