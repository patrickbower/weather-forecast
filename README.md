# Weather Forecast web application
A single responsive HTML page displaying a 5 day weather forecast



## How to build and run

1. Clone `weather-forecast` repository to your machine.
2. Run `npm install` in the projects root.
3. Run `npm run start` to start server and view in default browser.




## Technology

A custom stack built on a base from create-react-app

- React
- SASS
- Bootstrap
- erikflowers/weather-icons font
- Google fonts
- NPM
- Git



## Thought process

**Use appropriate technology**

Approuched as a prototype, the design and development had a brief discovery phase. A few concepts took shape from reseach and exporing the API.   

**UI should be unambiguous**

Infomation should be quickly availbale in a scannable form to absorb with minimum effort. I was inspired to create striking and bold elements to fill the space and clearly visually communicate.

**The application should feel performant**

With a single purpose in mind, a user wants relavant infomation with little interaction. There's a load screen to keep a user informed while geo-loacating, requesting and displaying relavant weather.

**Use the data to good effect**

As data is the predomanant UI content I looked to maximise its potencial by creating page theames changed by the current weather in the users location. Background gradients, header iconography and location title are controlled via relavant data.



## Tradeoffs

- Treated as a prototype, the rapid pace of design and development can result in some technical debt but allows for more features. Production strenth development could make strong use of technology such as Redux and CSS Modules to abstract complexity.



## Future features, fixes and technical debt

- **Feature:** Progressivly enhance with Progressive Web App technologys for offline use and homescreen button launch.
- **Feature:** Change location using form input field. This would enable a user to check forecasts in in other locations.
- **Feature:** Finesse with additional minimalist design details.
- **Technical debt:** Add linting to improve code quality.
- **Technical debt:** To refactor some JavaScript aspects to further explicit functional programming approach.
