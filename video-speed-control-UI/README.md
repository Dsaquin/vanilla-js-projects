## Created a video speed controller UI

User adjusts speed of a video with a speed bar

# TIL:

#### 1. When creating a function with an event listner, use a regular function if using _this_ keyword in order to refer to back to the variable

- arrow functions won't allow _this_ to refer back to that variable

#### 2. When getting the y coordinate of an element, like in previous project, again you must subtract its offsetTop by window's y because you can't assume it's at top of page. There might be padding, another element above it, etc.
