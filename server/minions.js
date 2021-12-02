const e = require('express');
const express = require('express');
const minionsRouter = express.Router();
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
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

minionsRouter.param('workId', (req,res,next,id)=>{
  const work = getFromDatabaseById('work', id);
  if(!work){
    res.status(404).send()

  }
  else {
    req.work = work
    next()}

})

minionsRouter.get('/:minionId/work', (req,res,next)=>{
  const minionWork = getAllFromDatabase('work').filter((singleWork) => {
    return singleWork.minionId === req.params.minionId;
  });
  res.send(minionWork)
})


minionsRouter.put('/:minionId/work/:workId', (req,res,next)=>{
  if(req.params.minionId !== req.body.minionId){
    res.status(400).send()
  }
  else{
  const worked = updateInstanceInDatabase('work',req.body);
  res.send(worked)
 }
})

minionsRouter.post('/:minionId/work/', (req,res,next) => {
  const workToAdd = req.body;
  const worked = addToDatabase('work',workToAdd)
  if(worked){
  res.status(201).send(workToAdd);
  }
  else {res.status(400).send()}
})

minionsRouter.delete('/:minionId/work/:workId', (req,res,next)=> {
  const deleted = deleteFromDatabasebyId('work',req.params.workId);
  if(deleted){
    res.status(204).send();
  }
  else {res.status(500).send()}
})

// Schema:

// - Work:
//   - id: string
//   - title: string
//   - description: string
//   - hours: number
//   - minionId: string

// Routes required:

// - GET /api/minions/:minionId/work to get an array of all work for the specified minon.
// - POST /api/minions/:minionId/work to create a new work object and save it to the database.
// - PUT /api/minions/:minionId/work/:workId to update a single work by id.
// - DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

// - `/api/minions`
//   - GET /api/minions to get an array of all minions. -> Done
//   - POST /api/minions to create a new minion and save it to the database. -> Done? not tested
//   - GET /api/minions/:minionId to get a single minion by id. -> Done not tested
//   - PUT /api/minions/:minionId to update a single minion by id.
//   - DELETE /api/minions/:minionId to delete a single minion by id.