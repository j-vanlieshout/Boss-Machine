const meetingsRouter = require('express').Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db')


module.exports = meetingsRouter;

meetingsRouter.get('/', (req,res,next) => {
    res.send(getAllFromDatabase('meetings'))
})

meetingsRouter.post('/', (req,res,next)=>{
    const newMeeting = addToDatabase('meetings',createMeeting());
    if (newMeeting){
        res.status(201).send(newMeeting)
    }
})

meetingsRouter.delete('/', (req,res,next) => {
    const deleted = deleteAllFromDatabase('meetings')
    res.status(204).send()
})

// - `/api/meetings`
//   - GET /api/meetings to get an array of all meetings.
//   - POST /api/meetings to create a new meeting and save it to the database.
//   - DELETE /api/meetings to delete _all_ meetings from the database.
