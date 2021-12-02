const express = require('express');
const minionsRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db')

minionsRouter.get()


module.exports = minionsRouter;


// - `/api/minions`
//   - GET /api/minions to get an array of all minions.
//   - POST /api/minions to create a new minion and save it to the database.
//   - GET /api/minions/:minionId to get a single minion by id.
//   - PUT /api/minions/:minionId to update a single minion by id.
//   - DELETE /api/minions/:minionId to delete a single minion by id.