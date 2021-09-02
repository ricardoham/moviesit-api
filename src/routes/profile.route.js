const express = require('express');

const router = express.Router();

const profileController = require('../controller/profile.controller');

router.get('', profileController.profile_details);
router.get('/:id', profileController.profile_detail);
router.get('/user/:id', profileController.profile_details_from_user);
router.post('', profileController.profile_create);
router.put('/:id', profileController.profile_update);
router.delete('/:id', profileController.profile_delete);

module.exports = router;
