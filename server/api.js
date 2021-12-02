const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions.js')
const ideasRouter = require('./ideas.js')




apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;


// - `/api/meetings`
//   - GET /api/meetings to get an array of all meetings.
//   - POST /api/meetings to create a new meeting and save it to the database.
//   - DELETE /api/meetings to delete _all_ meetings from the database.


