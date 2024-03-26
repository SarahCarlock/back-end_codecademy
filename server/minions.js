const minionsRouter = require('express').Router();
module.exports = minionsRouter;

const {     createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
  } = require('./db');
  

  minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
  });
  //GET /api/minions to get an array of all minions.
  minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
  });
  //POST /api/minions to create a new minion and save it to the database.
  minionsRouter.post('/', (req, res, next) => {
    const minionCreated = addToDatabase('minions', req.body);
    res.status(201).send(minionCreated);
  });
  //GET /api/minions/:minionId to get a single minion by id.
  minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
  });
  //PUT /api/minions/:minionId to update a single minion by id.
  minionsRouter.put('/:minionId', (req, res, next) => {
    const minionUpdated = updateInstanceInDatabase('minions',req.body);
    res.send(minionUpdated);
  });
  //DELETE /api/minions/:minionId to delete a single minion by id.
  minionsRouter.delete('/:minionId', (req, res, next) => {
    const minionDeleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (minionDeleted) {
      res.status(204);
    } else {
      res.status(400);
    }
    res.send();
  });

//WORK

//GET /api/minions/:minionId/work to get an array of all work for the specified minion.
minionsRouter.get('/:minionId/work', (req, res, next) => {
  const work = getAllFromDatabase('work').filter((singleWork) => {
    return singleWork.minionId === req.params.minionId;
  });
    res.send(work);
 });
//POST /api/minions/:minionId/work to create a new work object and save it to the database.
minionsRouter.post('/:minionId/work', (req, res, next) => {
  const newWork = req.body;
  newWork.minionId = req.params.minionId;
  const addedWork = addToDatabase('work', newWork);
   res.status(201).send(addedWork);
 });

 minionsRouter.param('workId', (req, res, next, id) => {
  const work = getFromDatabaseById('work', id);
  if (work) {
    req.work = work;
    next();
  } else {
    res.status(404).send();
  }
});
//PUT /api/minions/:minionId/work/:workId to update a single work by id.
minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
  if (req.params.minionId !== req.body.minionId) {
    res.status(400).send();
  } else {
    res.send(updateInstanceInDatabase('work', req.body));
  }
  res.send();
});
//DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
  const workDeleted = deleteFromDatabasebyId('work', req.params.minionId)
    res.status(204).send(workDeleted);
 });