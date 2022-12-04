const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');


router.get('/characters', charactersController.getAllCharacters);

router.get('/characters/:id', charactersController.getOneCharacter);

router.get('/characters/find/:status', charactersController.findCharacters);

router.post('/characters/create', charactersController.createCharacter);

router.delete('/characters/:id/delete', charactersController.deleteCharacter);

module.exports = router;