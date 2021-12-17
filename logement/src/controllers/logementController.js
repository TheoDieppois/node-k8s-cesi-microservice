const Logement = require('../models/logement');

module.exports = {
  get: async (req, res) => {
    const logements = await Logement.find();

    res.send(logements);
  },

  post: async (req, res) => {
    const { description, prix } = req.body;

    const newLogement = await Logement.create({
      description: description,
      prix: prix,
    });

    await newLogement.save();

    res.send(newLogement);
  },

  getById: async (req, res) => {
    const id = req.params.id;

    try {
      const exisitingLogement = await Logement.findById(id);
      res.send(exisitingLogement);
    } catch (err) {
      res.send('Pas de logement trouvé avec cet id');
    }
  },
};
