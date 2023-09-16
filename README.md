# Project Setup
1. Create a new folder for your project. 
2. Run npm init to create install node modules. 
3. Adjust the settings to your liking, but make sure that the entry point is server.js, not the default index.js.
4. Now we need to install express, we want to make sure we add express to our dependcies, so we will run: 
```sh
npm i --save express
```
5. Create a new folder named routes. 
6. Inside of the routes folder, reate a index.js file. Add the following contents:
```js
const routes = require('express').Router(); 

routes.get('/', (req, res, next) => {
    res.json('Hello World!');
});

module.exports = routes;
```
7. Create the server.js file. Add the following contents: 
```js
var express = require('express');
var app = express();

app.use('/', require('./routes'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

```
8. Run this command to have nodemon run your changes once you save the changes made: 
```sh
npm i --save-dev nodemon
```
9. Open your package.json file, add a start script below the test script. It should look similar to this: 
```json
"start": "nodemon server.js"
```
10. Now, test to see if your application is working by running: 
```sh
npm start
```
11. For testing rest clients, you will need to install an extension or use POSTMAN. Make sure you have one you would like to use. I will just use a VScode extension for ease of use.
12. Create a new file, name it .rest
13. Inside of the .rest file, add a line like this with the port you are using: 
```rest
GET http://localhost:3000 HTTP/1.1
```
14. If it works, you should get a 200 OK along with the response: "Hello World"