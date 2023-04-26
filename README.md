README
This is a simple text animation using HTML, CSS, and JavaScript. When you run the code, you will see the text "I love" and then a looping animation where three different words ("marketing", "growth", and "web3") appear one letter at a time next to the "I love" text. The animation will continue looping through the three words indefinitely.

HTML
The HTML code defines the basic structure of the webpage. It includes a <title> tag and links to an external CSS file (style.css) and an external JavaScript file (index.js). In the <body> tag, there are two <h3> tags, one with the text "I love" and another with an empty id attribute of "target". This second <h3> tag will be used to display the animated text.

CSS
The CSS code includes styling for the webpage. It imports a font from Google Fonts (Josefin Sans) and sets some default styles for the body tag, including setting the font family, centering the content, and hiding any overflow. There is also styling for the #target element, which is the element that will display the animated text. It sets the display to flex, adds some margin and positioning, and includes an ::after pseudo-element that creates a vertical line next to the text. This pseudo-element also includes an animation (anim) that causes the line to fade in and out.

JavaScript
The JavaScript code is responsible for the text animation. It first defines a variable target that points to the <h3> element with the id attribute of "target". It also defines an array of three words (array) that will be used in the animation.

The loop function is the main function responsible for the animation. It uses setTimeout to create a delay between each step of the animation. The first if statement checks if we have reached the end of the array of words. If we have, it resets the wordIndex and letterIndex variables and calls the loop function again to start over. If we haven't reached the end of the array, the second if statement checks if we have finished displaying all the letters in the current word. If we haven't, it calls the createLetter function to display the next letter in the word. If we have finished displaying all the letters in the current word, the third if statement increments the wordIndex variable and resets the letterIndex variable to 0. It then uses setTimeout to call the loop function again after a delay of 1.2 seconds.

The createLetter function is called by the loop function to display the next letter in the current word. It creates a new <span> element, sets its textContent to the next letter in the word, appends it to the target element, and then uses setTimeout to remove the <span> element after a delay of 1.2 seconds.

Overall, this code provides a simple example of how to create a text animation using basic HTML, CSS, and JavaScript.
