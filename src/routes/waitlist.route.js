const express = require('express');

const router = express.Router();

const waitListController = require('../controller/waitlist.controller');

router.get('', waitListController.waitList_details);
router.get('/:id', waitListController.waitList_detail);
router.get('/user/:id', waitListController.waitList_details_from_user);
router.post('', waitListController.waitList_create);
router.put('/:id', waitListController.waitList_update);
router.delete('/:id', waitListController.waitList_delete);

module.exports = router;
