# # Playing around with HTML5 Canvas

# TIL:

#### 1. html <canvas> element (similar to MSFT paint) is used to draw graphics on a web page, using JS.

        - So, you draw with a block of pixels on canvas context.
        - canvas is a container for graphics and by default has no border or content.
        - It can also be used to make photo compostions, real-time video processing/rendering, and create animations

#### 2. CanvasRenderingContext2D.globalCompositeOperation - property of Canvas 2D API and sets type of compositing operation when drawing new shapes.

        - aka: ctx.globalCompositeOperation = type; // <- for example 'multiply' (blends top layer of color to bottom, normally get darker picture)

#### 3. Destructuring assignment - easy way to extract data from arrays and objects.

        - ex: var [greets, nextIndex] = ["Hi, I'm Dawn."];
        -     console.log(greets); // ('Hi')
        -     console.log(nextIndex); // ('I'm')

#### 4. mothereffinghsl.com - helps anyone to create HSL colors quickly

        - Hue, Saturation, Lightness
