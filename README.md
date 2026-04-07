# Pomodoro Clock
### Video Demo: https://youtu.be/bL5VMzm-mBs
## Description

This project was made to help with the Pomodoro Technique. The Pomodoro Technique is a method of time management where a person will work on a task for 25 minutes, take a 5 minute break, then repeat the process another 3 times (for 4 times in total). After the 4th cycle, the person will take an extended 15-30 minute break. 

After recently starting to use the Pomodoro Technique myself, I noticed that I would often forget to start my "study" or "break" timer. This is what made me decide to work on this project: I wanted to fix my issues by creating something with computer science. 

## Setup
This project requires python to be installed.
Follow the instructions below to use the application.

1. Clone the repo

2. Setup the virtual environment:
    - Windows:
    ```cmd
    python -m venv venv
    venv\Scripts\activate
    ```
    - macOS/Linux:
    ``` bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the requirements from the root directory:
``` bash
pip install -r requirements.txt
```

4. Run the flask application:
    - Run:
    ``` bash
    flask run
    ```
    - Run in debug mode:
    ``` bash
    flask run --debug
    ```

5. To deactivate the virtual environment:
``` bash
deactivate 
```

## Features

- The application has 2 seperate input boxes for the 2 separate "study" and "break" timers, made distinct by text labels. I decided to allow the users to input their own times, instead of defaulting to 25-5 minutes, because I started using different timed cycles for different tasks. For a reading intensive task, I go with the typical 25-5, but for a task that practices more repetition, like math homework, I go with a 50-10 cycle. The way it's implemented, users can enter any time between 0 seconds - 99 minutes and 99 seconds for either clock.

- When either of the timers end, a dialog box/"pop-up" will appear and the application will not continue until it is closed by a user through a button. This means that after the study timer, the break timer will not automatically start until the dialog box is closed. This means that after the break timer, the user will not be able to start another cycle until they close the dialog box. Along with the dialog box appearing, a sound will play whenever either of the timers end to alert the user that a timer is done. The sound is played from a file within the static/sounds directory, and can be changed to whatever by whoever if they please. 

- There is a text display of the time left on the timer and a progress bar immediately below that display. The progress bar visualized the amount of time studied and the amount of time left. 

## Files

```
├── app.py
├── requirements.txt
├── static
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── script.js
│   └── sounds      
└── templates
    └── index.html
```

This project is a flask web-app, so it contains python files. For the frontend, I used vanilla javascript, utilizing css and html. 

- ### app.py

    There is almost nothing in this file - there is only the routing to the index.html file. I decided not to work with databases or with multiple pages for this project, since I felt that what I was trying to acheive wouldn't require them. So, I really didn't need to make this project with flask, but I might come back to this project in the future to implement database features, so I kept flask. 

- ### index.html

    This file contains the html for all of the features described in the previous section. This html file imports bootstrap, scales based on device, and imports script.js and styles.css. All of the elements seen when the app is run are contained in a main element that centers them all on the window. There is a dialog element inside of this main element that is only shown once a timer ends. The progress bar is simply div elements that are styled through css. 

- ### script.js

    This file contains all of the scripts for the project. The most complex function is `startTimer(phase)`, which is run everytime a user starts a cycle. This function calls all of the other functions in the script.js at some point or another. It uses `Date.now()` to accurately track the total ellapsed time of the timers. This method also controls the visual progress of the progress bar by altering the value of the width property of the elements css, making it wider as the timer progresses. Once a timer is done, the dialog element will be unhidden and a `Promise` object will be created that will only be resolved once the user "closes" the dialog element. If it was a "study" phase, the function will call itself and to start a "break" phase. When the "break" phase ends, the function will not call itself. 
    `displayTimeLeft(seconds)`, `convertToSeconds(durationArray)`, and `checkInputs()` are all helper methods used in the `startTimer(phase)` method.  `checkInputs()` executes input validation. `convertToSeconds(durationArray)` converts the user input into seconds. `displayTimeLeft(seconds)` displays the time left on the `display` element.

- ### styles.css

    This file contains all of the styles for the project. The most complex styling is the `.progress-bar` class. It starts at width of 0% - this makes it "hidden" at first, but as the timer counts down, the width will continually be increased, making it "progress".
