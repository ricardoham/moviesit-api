const { v4: uuidv4 } = require('uuid');
const WaitList = require('../model/waitlist.model');


exports.waitList_create = (req, res, next) => {
  let waitList = new WaitList({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
    initialDate: req.body.initialDate,
    doDate: req.body.doDate,
  });

  try {
    await waitList.save();
    res.send("Wait list Created");
  } catch (error) {
    next(error);
  }
}

exports.waitList_details = async (req, res) => {
  const waitList = await WaitList.find({});

  try {
    res.send(waitList);
  } catch (error) {
    res.status(404).send(error);
  }
}
