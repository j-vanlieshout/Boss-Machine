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

  module.exports = minionsRouter;

  minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
  });



// minionsRouter.get('/:minionId',(req,res,next)=>{
//   const minionId = req.params.minionId
//   const toReturn = getFromDatabaseById('minions', minionId)
//   if(toReturn){
//     res.send(toReturn)
//   }
//   else{res.status(404).send()}
// })

// minionsRouter.post('/', (req,res,next) => {
//   const minionToAdd = req.query;
//   const worked = addToDatabaseById('minions',minionToAdd)
//   if(worked){
//   res.status(201).send(minionToAdd);
//   }
//   else {res.status(400).send()}
// })

// minionsRouter.put('/:minionId', (req,res,next) => {
//   const minionId = req.params.minionId;
//   const worked = updateInstanceInDatabase('minions', req.query);
//   if (worked) {
//     res.send(req.query)
//   }
//   else {res.status(404).send()}
// })





// - `/api/minions`
//   - GET /api/minions to get an array of all minions. -> Done
//   - POST /api/minions to create a new minion and save it to the database. -> Done? not tested
//   - GET /api/minions/:minionId to get a single minion by id. -> Done not tested
//   - PUT /api/minions/:minionId to update a single minion by id.
//   - DELETE /api/minions/:minionId to delete a single minion by id.