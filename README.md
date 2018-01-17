# **Weather Forecast**

A single responsive HTML page displaying a 5 day weather forecast



## How to build and run

Clone `weather-forecast` repository to your machine.

Run `npm install` in the projects root.

Run `npm run start` to start server and view in default browser.



## Technology

A custom stack built on a base from create-react-appReact:

- SASS
- Bootstrap
- erikflowers/weather-icons font
- Google fonts
- NPM
- Git



## Thought process

**Use appropriate technology**

Approached as a prototype, the design and development had a brief discovery phase. A few concepts took shape from research and exploring the API. 

**UI should be unambiguous**

Information should be quickly available in a scannable form to absorb with minimum effort. I was inspired to create striking and bold elements to fill the space and clearly visually communicate.

**The application should feel performant**

With a single purpose in mind, a user wants relevant information with little interaction. There's a load screen to keep a user informed while geo-locating, requesting and displaying relevant weather.

**Use the data to good effect**

As data is the predominant UI content I looked to maximise its potential by creating page themes changed by the current weather in the users location. Background gradients, header iconography and location title are controlled via relevant data.



## Trade Offs

Treated as a prototype, the rapid pace of design and development can result in some technical debt but allows for more features. Production strength development could make strong use of technology such as Redux and CSS Modules to abstract complexity.



## Future features, fixes and technical debt

**Feature:** Progressively enhance with Progressive Web App technologies for offline use and home screen button launch.

**Feature:** Change location using form input field. This would enable a user to check forecasts in in other locations.

**Feature:** Finesse with additional minimalist design details.

**Technical debt:** Add linting to improve code quality.

**Technical debt:** To refactor some JavaScript aspects to further explicit functional programming approach.