const express = require('express');
const app = express();

app.use((req, res , next) => {
 console.log('Hi i am the middelware');
    next();
});


app.use((req, res , next) => {
   res.send('hi im the response from the express');
   });

module.exports = app;
