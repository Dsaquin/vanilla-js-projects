## Browsers Speech Synthesis API reads user's text in different voies

# TIL:

#### 1. SpeechSynthesisUtterance()

- contains what text should be read and how to read it(speed, pitch, volume)

#### 2. SpeechSynthesis()

- controller interface for speech service, start and stop speech for this project
- speak() method is called when you want to pass in an utterance (here it's _msg_)

#### 3. .bind()

- creates a new fn that will have _this_ set to its 1st parameter (whatevers passed in).. here I call in a context of _this_ (null) and pass argument of false to stop the speaking
