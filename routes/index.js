const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('<h1>Todo API Syntra</h1>');
});

module.exports = router;
