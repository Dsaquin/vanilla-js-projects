# Using AJAX for typeahead

#TIL:

#### 1. fetch() method is an API that's built into the browser and makes network requests (newer than XMLHttpRequest & easier) for data.

        - It returns a Promise and avoids callback functions

#### 2. spread syntax (...) can spread out data in a push function, so as to not recreate an array when pushing to an array.

#### 3. Future tip when coding in JS: Get data first, make sure functionality is in place, then attach event listeners.

#### 4. Promise.prototype.then()

        - a Promise is an object that shows success or failure of an asynchronous request (here we wanted a file of US city/states).
        - in promises, you can have a then function.
        - then() takes callback functions(success/failure) and returns a promise (promiseception!)

#### 5. RegExp (regular expression) - sequence of characters put in an object that's used for pattern-matching. Useful for searching specific text.
