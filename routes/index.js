const express = require('express');
const htmlRoutes = require('./htmlroutes');
const apiRoutes = require('./apiroutes');

const app = express()

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

module.exports = app