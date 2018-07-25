# # Logic with checking all checkboxes with SHIFT key

# TIL:

#### 1. querySelectorAll() can grab selector elements more specifically by first grabbing the class it belongs to(if any).

        - syntax: elementList = parentNode.querySelectorAll(selectors);
        - ex: document.querySelectorAll('.inbox input[type="checkbox"]');
        -                              (class, selector[attribute selector])

#### 2. It's IMPORTANT to always name variables logically!

        - 100% better readable code
        - declare above functions it'll be in (if you don't want it to fully be in the functional scope)
        - 'let' allows variables to be reassigned constantly

#### 3. forEach()es are AMAZING and a lot cleaner than regular for loops

#### 4. Flag variable for the win in this code project!!! It saved me (on my 2nd attempt) from making a long if/else statement that has more functions and is less readable/more confusing.
