TIL:

1.  Query selectors return a Node list, which has only a couple of methods.
    • DON't RETURN AN ARRAY
2.  Dataset property provides access to all custom data attributes (data-\*) from a specific element.
    • example from this project: input.dataset.sizing
3.  When using CSS Variables
    • case sensitive: variables must start with two dashes (--)
    • Variables need declared in a selector that defines its scope (global scope, then use :root)
    • can acces them through var() function
    • var() is used to put in value of custom property.
    • updates them on any element and any selectors inside that element (that reference the var)
