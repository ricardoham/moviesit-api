const Comments = require("../model/comments.model");

exports.comments_create = (req, res) => {
  let comment = new Comments({
    id: this._id,
    movieId: req.body.movieId,
    commentTitle: req.body.commentTitle,
    comment: req.body.comment,
    upVote: req.body.upVote,
    downVote : req.body.downVote
  });

  comment.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Comment Created");
  });
};

exports.comments_details = (req, res) => {
  Comments.find({}, (err, comments) => {
    res.send(comments);
  });
}
