const express = require('express');
const models = require('./models');

const router = express.Router();

router.get('/related_products/:id', (req, res) => {
  models.products.getRelated(req.params.id, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});

router.post('/related_products/', (req, res) => {
  models.products.addNew(req.body, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(201).send(results);
    }
  });
});

router.patch('/related_products/:pid/:sid', (req, res) => {
  models.products.patchRelated(req.params.pid, req.params.sid, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});

router.delete('/related_products/:pid/:sid', (req, res) => {
  models.products.deleteRelated(req.params.pid, req.params.sid, (err, results) => {
    if (err) {
      res.status(500).send('Something went wrong!');
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
