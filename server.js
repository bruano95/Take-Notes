const express = require('express');
const path = require('path');
const route = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(route)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
