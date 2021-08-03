const express = require('express');

const router = express.Router();

const logicController = require('../controllers/logicController')

router.post('/bfhl', logicController.postLogic);

module.exports = router;