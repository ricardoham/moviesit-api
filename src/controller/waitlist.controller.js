const { v4: uuidv4 } = require('uuid');
const WaitList = require('../model/waitlist.model');

exports.waitList_create = async (req, res) => {
  const waitList = new WaitList({
    id: uuidv4(),
    userId: req.body.userId,
    title: req.body.title,
    comment: req.body.comment,
    dueDate: req.body.dueDate,
    movie: req.body.movie,
  });

  try {
    await waitList.save();
    res.send('Wait list Created');
  } catch (error) {
    console.error(error);
    res.status(401);
    res.send('Error occurred during request');
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
    const waitList = await WaitList.findOne({ id: req.params.id });
    if (!waitList) res.status(404).send('No waitList found');
    res.status(200).send(waitList);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.waitList_details_from_user = async (req, res) => {
  try {
    const waitList = await WaitList.find({ userId: req.params.id });
    if (!waitList) res.status(404).send('No waitList found');
    res.status(200).send(waitList);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.waitList_update = async (req, res) => {
  try {
    const waitList = await WaitList.findByIdAndUpdate(req.params.id, req.body);
    await waitList.save();
    res.status(200).send(waitList);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.waitList_delete = async (req, res) => {
  try {
    const waitList = await WaitList.findByIdAndDelete(req.params.id);
    if (!waitList) res.status(404).send('No waitList found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
