const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('New connection !');
});


module.exports = app;