const PropertyRequiedError = require('../errors/property-required-error');

const getQuote = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id) || 0;

    if (!id) {
      throw new PropertyRequiedError('id');
    }

    res.send({ message: `hola ${id}` });
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = getQuote;
