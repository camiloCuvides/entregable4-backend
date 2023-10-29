const express = require('express');
const crudRouter = require('./crud.routes');
const router = express.Router();

// colocar las rutas aquí
router.use('/cruds', crudRouter);


module.exports = router;