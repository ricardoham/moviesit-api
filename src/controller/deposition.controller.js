const { v4: uuidv4 } = require('uuid');
const Deposition = require('../model/deposition.model');

exports.deposition_create = async (req, res, next) => {
  const deposition = new Deposition({
    id: uuidv4(),
    userId: req.body.userId,
    commentedItemId: req.body.commentedItemId,
    createdBy: req.body.createdBy,
    createdAt: Date.now(),
    comment: req.body.comment,
  });
  try {
    await deposition.save();
    res.send('Deposition Created');
  } catch (error) {
    next(error);
  }
};

exports.deposition_details = async (req, res) => {
  try {
    const deposition = await Deposition.find({});
    res.status(200).send(deposition);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.deposition_detail = async (req, res) => {
  try {
    const deposition = await Deposition.findOne({ id: req.params.id });
    if (!deposition) res.status(404).send('No deposition found');
    res.status(200).send(deposition);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deposition_from_profile = async (req, res) => {
  try {
    const deposition = await Deposition.find({ commentedItemId: req.params.id });
    if (!deposition) res.status(404).send('No deposition found');
    res.status(200).send(deposition);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deposition_update = async (req, res) => {
  try {
    const deposition = await Deposition.findByIdAndUpdate(
      req.params.id, req.body,
    );
    await deposition.save();
    res.status(200).send(deposition);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deposition_delete = async (req, res) => {
  try {
    const deposition = await Deposition.findByIdAndDelete(req.params.id);
    if (!deposition) res.status(404).send('No deposition found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
