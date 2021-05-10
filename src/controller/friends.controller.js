const Friends = require('../model/comments.model');

exports.friends_create = async (req, res, next) => {
  let friends = new Friends({
    id: req.body.friendId,
    name: req.body.name,
    avatar: req.body.avatar,
  });
  try {
    await friends.save();
    res.send("Friend Created");
  } catch (error) {
    next(error);
  }
};
