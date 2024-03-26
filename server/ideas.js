const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const {      createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const send = require('send');

ideasRouter.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send();
    }
  });
//GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});
//POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const ideaCreated = addToDatabase('ideas', req.body);
    res.status(201).send(ideaCreated);
});
//GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/:id', (req, res, next) => {
    res.send(req.idea);
});
//PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
    const ideaUpdated = updateInstanceInDatabase('ideas', req.body);
    res.send(ideaUpdated);
});
//DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete('/:id', (req, res, next) => {
    const ideaDeleted = deleteFromDatabasebyId('ideas', req.params.id);
    if (ideaDeleted) {
        res.status(204);
      } else {
        res.status(500);
      }
      res.send();
});