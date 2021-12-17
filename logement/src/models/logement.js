const mongoose = require('mongoose');

const logementSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
});

const Logement = mongoose.model('Logement', logementSchema);

module.exports = Logement;
