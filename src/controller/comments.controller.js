const { v4: uuidv4 } = require('uuid');
const Comments = require("../model/comments.model");

exports.comments_create = async (req, res, next) => {
  let comment = new Comments({
    id: uuidv4(),
    movieId: req.body.movieId,
    commentTitle: req.body.commentTitle,
    comment: req.body.comment,
    upVote: req.body.upVote,
    downVote : req.body.downVote
  });
  try {
    await comment.save();
    res.send("Comment Created");
  } catch (error) {
    next(error);
  }
};

exports.comments_details = async (req, res) => {
  const comments = await Comments.find({});

  try {
    res.send(comments);
  } catch (error) {
    res.status(404).send(error);
  }
}
