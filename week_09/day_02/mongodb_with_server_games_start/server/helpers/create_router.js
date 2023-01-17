const express = require('express');
const ObjectID = require('mongodb').ObjectID

const Collection = require('mongodb/lib/collection');

const createRouter = function (collection) {

  const router = express.Router();

  // Handle index route
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(games => res.json(games))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });

  // Show (individual game) route
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then(game => res.json(game))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });

  // Create New Game
  router.post('/', (req, res) => {
    const newGameData = req.body;
    collection
      .insertOne(newGameData)
      .then(result => {
        res.json(result.ops[0])
      })
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });

  // Delete (individual game) route
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(game => res.json(game))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });

  // Update (individual game)
  router.put('/:id', (req, res) => {
    const updatedGameData = req.body;
    const id = req.params.id;
    collection
      .updateOne(
        { _id: ObjectID(id) }, 
        {$set: updatedGameData}
      )
      .then(game => res.json(game))
      .catch(error => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
      })
  });
  
  return router;

};

module.exports = createRouter;
