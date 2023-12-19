const express = require('express');
const router = express.Router();
const omicsController = require('../controllers/omics.controller');

router.post('/', omicsController.getByGenes);
router.get('/:singleGene', omicsController.getByGene);

module.exports = router;
