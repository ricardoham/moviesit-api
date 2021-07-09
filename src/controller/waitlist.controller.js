const { v4: uuidv4 } = require('uuid');
const WaitList = require('../model/waitlist.model');

exports.waitList_create = async (req, res, next) => {
  const waitList = new WaitList({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
    initialDate: req.body.initialDate,
    doDate: req.body.doDate,
  });

  try {
    await waitList.save();
    res.send('Wait list Created');
  } catch (error) {
    next(error);
  }
};

exports.waitList_details = async (req, res) => {
  const waitList = await WaitList.find({});

  try {
    res.send(waitList);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.waitList_detail = async (req, res) => {
  try {
    const waitList = await WaitList.findById(req.params.id);
    if (!waitList) res.status(404).send('No waitList found');
    res.status(200).send(waitList);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.waitList_update = async (req, res) => {
  try {
    const waitList = await WaitList.findByIdAndUpdate(req.params.id, req.body, (err) => {
      res.status(404).send('Impossible to update', err);
    });
    await waitList.save();
    res.status(200).send(waitList);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.waitList_delete = async (req, res) => {
  console.log(req.body);
  try {
    const waitList = await WaitList.findByIdAndDelete(req.body.id);
    if (!waitList) res.status(404).send('No waitList found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
