const express = require('express');
const { json } = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

const logementRoute = require('./routes/Logement');

app.use('/logement', logementRoute);

const start = async () => {
  try {
    await mongoose.connect('mongodb://logement-mongo-srv:27017/logement');

    console.log('Connected to mongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
};

start();
