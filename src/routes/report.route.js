const express = require('express');
const reportController = require('../controller/report.controller');

const reportRouter = express.Router();

reportRouter.get('', reportController.generate_report);

module.exports = reportRouter;
