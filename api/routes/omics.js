const express = require('express');
const router = express.Router();
const omicsController = require('../controllers/omics.controller');

router.get('/', omicsController.getByGenes);
router.get('/:singleGene', omicsController.getByGene);

module.exports = router;
