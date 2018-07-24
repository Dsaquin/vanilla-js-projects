# # Practice with some Chrome Dev Tools tricks

# TIL:

#### 1. console.dir(element) - shows everything that lives on that element.

        - prototype arrow (in console) will show all the methods/properties

#### 2. Difference between innerHTML, textContent and innerText:

        - innerHTML parses content as HTML and takes longer.
        - textContent uses straight text, does not parse HTML, and is faster.
        - innerText takes styles into consideration. It won't get hidden text for instance.
        - textContent outputs text/plain while .innerHTML outputs text/html.
    	  - Quick example:
    	  - var example = document.getElementById('exampleId');
    	    - example.textContent = '<a href="https://google.com">google</a>';
              - output: <a href="http://google.com">google</a>
    	    - example.innerHTML = '<a href="https://google.com">google</a>';
    		  - output: google
