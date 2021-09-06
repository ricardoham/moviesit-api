const { v4: uuidv4 } = require('uuid');
const Comments = require('../model/comments.model');

exports.comments_create = async (req, res, next) => {
  const comment = new Comments({
    id: uuidv4(),
    userId: req.body.userId,
    commentedItemId: req.body.commentedItemId,
    createdBy: req.body.createdBy,
    createdAt: Date.now(),
    comment: req.body.comment,
  });
  try {
    await comment.save();
    res.send('Comment Created');
  } catch (error) {
    next(error);
  }
};

exports.comments_details = async (req, res) => {
  try {
    const comments = await Comments.find({});
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.comment_detail = async (req, res) => {
  try {
    const comments = await Comments.findOne({ id: req.params.id });
    if (!comments) res.status(404).send('No comments found');
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.comments_details_from_recommendation = async (req, res) => {
  try {
    const comments = await Comments.find({ commentedItemId: req.params.id });
    if (!comments) res.status(404).send('No comments found');
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.comments_details_from_user = async (req, res) => {
  try {
    const comments = await Comments.find({ userId: req.params.id });
    if (!comments) res.status(404).send('No comments found');
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.comment_update = async (req, res) => {
  try {
    const comment = await Comments.findByIdAndUpdate(
      req.params.id, req.body,
    );
    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.comment_delete = async (req, res) => {
  try {
    const comment = await Comments.findByIdAndDelete(req.params.id);
    if (!comment) res.status(404).send('No comment found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
