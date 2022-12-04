const express = require('express');
const router = express.Router();
const {home, us} = require('../controllers/mainController');

router.get('/', home);

router.get('/nosotros', us);

module.exports = router;