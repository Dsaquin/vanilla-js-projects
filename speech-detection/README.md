## Using browser's Speech Recognition to put the user's words on the page

- window.SpeechRecognition is a global var that lives in browser on top of window (for Chrome it's at webkitSpeechRecognition)

# TIL:

#### 1. How to access the microphone within a browser and utilize JS event listeners to create paragraphs of text on the page of what the user says.

- event listeners "result" and "end" can help receive the DOM results of what the user says in real-time.

#### 2. DOMs return Nodelists so it is needed to convert to an array.

- Array.from()
- from there it is need to access the nested elements through 2 map()s functions.

This is awesome!
