const express = require('express');

const router = express.Router();

const depositionController = require('../controller/deposition.controller');

router.get('', depositionController.deposition_details);
router.get('/:id', depositionController.deposition_detail);
router.get('/profile/:id', depositionController.deposition_from_profile);
router.post('', depositionController.deposition_create);
router.put('/:id', depositionController.deposition_update);
router.delete('/:id', depositionController.deposition_delete);

module.exports = router;
