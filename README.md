# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is for experiencing building a react project without useEffect and useState, and to write code in
a class components way and not in a function component way.

Writing project with class components is an old way of writing react code, similar to oop principles

In the Counter.js script is an exercise project to get used to with this way of coding. it s a simple counting project

In the App_v1 the states are initialized with construscor and the fetch function is dependent of the constructor.
Also, let's not forget what the project is about. it is a weatcher forecast with a live data from the open-meteo.com api.

In the App is the same project as in the App_v1 but improved with elimination the boilerplates, i get rid of the constructor for the state and managed to redo the fetch function so that it is not dependent of the constructor anymore. also the stored the location in local storage so at the initial render the weather is displayed from the location stored in the local storage. Also experienced working with lifecycle methodes which works as useEffect, the can make side effect that only executes at hte initial render or at every re-render of the application. ex:componentDidUpdate()
