const express = require('express');
const ideasRouter = express.Router();
const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db')

module.exports = ideasRouter;

const checkMillionDollarIdea = require('./checkMillionDollarIdea')

ideasRouter.param('id', (req,res,next,id) => {
    const idea = getFromDatabaseById('ideas',id);
   if(idea){
     req.idea = idea;
     next();
   }
   else {res.status(404).send()}
 })

ideasRouter.get('/', (req,res,next)=>{
     res.send(getAllFromDatabase('ideas'))
 })


ideasRouter.post('/', checkMillionDollarIdea, (req,res,next) => {
    const worked = addToDatabase('ideas', req.body);
    res.status(201).send(worked);
})

 
ideasRouter.get('/:id', (req, res, next) => {
    res.send(req.idea);
  });

ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
    let updatedInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedInstance);
  });
  
ideasRouter.delete('/:id', (req,res,next)=> {
    const deleted = deleteFromDatabasebyId('ideas',req.params.id);
    if (deleted){
    res.status(204).send();
    }
    else {res.status(500).send()} 
})



//   // - `/api/ideas`
// //   - GET /api/ideas to get an array of all ideas.
// //   - POST /api/ideas to create a new idea and save it to the database.
// //   - GET /api/ideas/:ideaId to get a single idea by id.
// //   - PUT /api/ideas/:ideaId to update a single idea by id.
// //   - DELETE /api/ideas/:ideaId to delete a single idea by id.


