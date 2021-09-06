const { v4: uuidv4 } = require('uuid');
const BanComments = require('../model/bancomment.model');

exports.ban_comments_create = async (req, res, next) => {
  const comment = new BanComments({
    id: uuidv4(),
    userId: req.body.userId,
    userReportName: req.body.userReportName,
    userReportedId: req.body.userReportedId,
    commentedItemId: req.body.commentedItemId,
    commentCreatedBy: req.body.commentCreatedBy,
    commentCreatedAt: req.body.commentCreatedAt,
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

exports.ban_comments_details = async (req, res) => {
  try {
    const comments = await BanComments.find({});
    res.status(200).send(comments);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.ban_comment_detail = async (req, res) => {
  try {
    const comments = await BanComments.findOne({ id: req.params.id });
    if (!comments) res.status(404).send('No comments found');
    res.status(200).send(comments);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.ban_comment_update = async (req, res) => {
  try {
    const comment = await BanComments.findByIdAndUpdate(
      req.params.id, req.body,
    );
    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.ban_comment_delete = async (req, res) => {
  try {
    const comment = await BanComments.findByIdAndDelete(req.params.id);
    if (!comment) res.status(404).send('No comment found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
