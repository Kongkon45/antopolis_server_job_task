const express = require('express');
const { getAllAnimal, createAnimal } = require('../controllers/animalControler');
const router = express.Router();


router.get('/animal', getAllAnimal );
router.post('/animal', createAnimal );

module.exports = router;