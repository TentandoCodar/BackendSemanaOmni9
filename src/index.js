const express = require('express');

const mongoose = require('mongoose');

const app = express();

const consign = require('consign');

const bodyParser = require('body-parser');


app.use(bodyParser.json());

consign().include('routes').into(app);

mongoose.connect('mongodb://localhost:27017/SemanaOmniStack9', {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(5000)