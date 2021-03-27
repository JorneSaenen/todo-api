const express = require('express');
const router = express.Router();
const cors = require('cors');
const Todos = require('../../models/Todo');

router.get('/', cors(), (req, res) => {
  Todos.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

router.get('/:id', cors(), (req, res) => {
  Todos.findOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

router.post('/', cors(), (req, res) => {
  const todo = new Todos({
    title: req.body.title,
    completed: req.body.completed,
  });
  todo
    .save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => res.status(500).json({ message: err }));
});

router.patch('/:id', cors(), (req, res) => {
  Todos.updateOne({ _id: req.params.id, completed: req.body.completed })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

router.delete('/:id', cors(), (req, res) => {
  Todos.deleteOne({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;
