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

minionsRouter.param('minionId', (req,res,next,id) => {
   const minion = getFromDatabaseById('minions',id);
  if(minion){
    req.minion = minion;
    next();
  }
  else {res.status(404).send()}
})

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});



minionsRouter.get('/:minionId',(req,res,next)=>{
  res.send(req.minion)
})

minionsRouter.post('/', (req,res,next) => {
  const minionToAdd = req.body;
  const worked = addToDatabase('minions',minionToAdd)
  if(worked){
  res.status(201).send(minionToAdd);
  }
  else {res.status(400).send()}
})

minionsRouter.put('/:minionId', (req,res,next) => {
  const worked = updateInstanceInDatabase('minions', req.body);
  if (worked) {
    res.send(req.body)
  }
  else {res.status(404).send()}
})

minionsRouter.delete('/:minionId', (req,res,next)=> {
  deleteFromDatabasebyId('minions',req.params.minionId);
  res.status(204).send();
})




// - `/api/minions`
//   - GET /api/minions to get an array of all minions. -> Done
//   - POST /api/minions to create a new minion and save it to the database. -> Done? not tested
//   - GET /api/minions/:minionId to get a single minion by id. -> Done not tested
//   - PUT /api/minions/:minionId to update a single minion by id.
//   - DELETE /api/minions/:minionId to delete a single minion by id.