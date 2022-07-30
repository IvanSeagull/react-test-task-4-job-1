const { Router } = require('express');
const controller = require('../Controllers/mainController');

const mainRouter = new Router();

mainRouter.get('/', (req, res) => {
  res.status(200).json({ msg: 'Home' });
});

mainRouter.get('/items', controller.getData);

module.exports = mainRouter;
