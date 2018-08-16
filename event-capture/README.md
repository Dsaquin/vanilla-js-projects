## Practice with Event Capturing, Bubbling, stopPropagation, and once object

# TIL:

#### 1. Event Propagation

**Event Bubbling and Event Capturing is the foundation of event handler and event delegation in JavaScript.**

- _Event Bubbling_ (Bottom to Top)
- _Capturing_ (Top to Bottom)

With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. All the modern browsers have event bubbling as the default way of event flow.

With capturing, the event is first captured by the outermost element and propagated to the inner elements.

#### 2. Event.stopPropagation()

- Stops any more propagation of the current event.

#### Within addEventListener function -

##### 3. Capture object

- Is a Boolean that (when true) triggers parent elements first, then the clicked element.
- default value is false.

##### 4. Once object

- Is a Boolean that (when true) has the listener invoking only the element clicked and then removes listener.
