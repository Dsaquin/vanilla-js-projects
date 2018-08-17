## Click and drag to scroll across a page

User clicks on the page in order to scroll through items

# TIL:

#### 1. Careful to know that the user clicked inside the element and not on the page

- Subtract the page's X coordinate to the element's offsetLeft to handle this.

#### 2. Event.preventDefault(); - will stop any selecting of text inside items.

- Prevents a link from opening the URL.

#### 3. Put the variables (startX, scrollLeft) first into mousedown event because mousemove event will use them as reference in order to scroll.

- events working together!
