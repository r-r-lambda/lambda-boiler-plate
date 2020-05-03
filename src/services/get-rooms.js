const getRoomsDao = require('../dao/get-rooms-dao');

const getRooms = async (req, res, next) => {
  try {
    const results = await getRoomsDao();

    const status = results.length > 0 ? 200 : 204;

    res.status(status).send(results);
  } catch (error) {
    next(error, req, res, next);
  }
};

module.exports = getRooms;
