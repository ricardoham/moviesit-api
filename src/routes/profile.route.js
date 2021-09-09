const express = require('express');

const router = express.Router();

const profileController = require('../controller/profile.controller');

router.get('', profileController.profile_details);
router.get('/:id', profileController.profile_detail);
router.get('/user/:id', profileController.profile_deposition_from_user);
router.post('', profileController.profile_create);
router.put('/:id', profileController.profile_update);
router.put('/admin/:id', profileController.profile_grant_admin);
router.delete('/:id', profileController.profile_delete);

module.exports = router;
