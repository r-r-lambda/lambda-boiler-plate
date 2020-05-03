const pool = require('../config/db-config');

const DatabaseError = require('../errors/database-error');

const getRoomsDao = async () => {
  const poolPromise = pool.promise();

  let results;

  try {
    [results] = await poolPromise.query('SELECT id, dato FROM datos_prueba');
  } catch (error) {
    throw new DatabaseError(error);
  }

  return results || [];
};

module.exports = getRoomsDao;
