const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions.js')



// app.get('/api/minions',(req,res,next)=>{
//   toReturn = getAllFromDatabase('minions');
//   res.status(200).send(toReturn);
// })

apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;

// - `/api/ideas`
//   - GET /api/ideas to get an array of all ideas.
//   - POST /api/ideas to create a new idea and save it to the database.
//   - GET /api/ideas/:ideaId to get a single idea by id.
//   - PUT /api/ideas/:ideaId to update a single idea by id.
//   - DELETE /api/ideas/:ideaId to delete a single idea by id.
// - `/api/meetings`
//   - GET /api/meetings to get an array of all meetings.
//   - POST /api/meetings to create a new meeting and save it to the database.
//   - DELETE /api/meetings to delete _all_ meetings from the database.


