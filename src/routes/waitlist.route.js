const express = require('express');

const router = express.Router();

const waitListController = require('../controller/waitlist.controller');

router.get('/waitlist', waitListController.waitList_details);
router.post('/waitlist', waitListController.waitList_create);

module.exports = router;
