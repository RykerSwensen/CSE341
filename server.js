const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connection.js');


const port = process.env.PORT || 3000;
const app = express();

// mongodb();
// app.use('/', require('./routes'));

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});



// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// })