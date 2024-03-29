const { v4: uuidv4 } = require('uuid');
const FavPeople = require('../model/fav-people.model');

exports.fav_people = (req, res) => {
  // console.log(req);
  res.send('fav_people Controller');
};

exports.fav_people_create = async (req, res, next) => {
  const favPeople = new FavPeople({
    id: uuidv4(),
    personId: req.body.id,
    userId: req.body.userId,
    isFavorite: req.body.isFavorite,
    name: req.body.name,
    birthDay: req.body.birthDay,
    deathDay: req.body.deathDay,
    placeOfBirth: req.body.placeOfBirth,
    department: req.body.department,
    biography: req.body.biography,
    popularity: req.body.popularity,
    profilePatch: req.body.profilePatch,
    createdAt: Date.now(),
  });

  try {
    await favPeople.save();
    res.send('fav_people created');
  } catch (err) {
    next(err);
  }
};

exports.fav_people_details = async (req, res) => {
  try {
    const people = await FavPeople.find({});
    res.status(200).send(people);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.fav_people_detail = async (req, res) => {
  try {
    const { query } = req;
    const person = await FavPeople.findOne({ personId: req.params.id }).where('userId').equals(query.userId);
    if (!person) res.status(204).send();
    res.status(200).send(person);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.fav_people_details_from_user = async (req, res) => {
  try {
    const person = await FavPeople.find({ userId: req.params.id });
    if (!person) res.status(404).send('No person found');
    res.status(200).send(person);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.fav_people_delete = async (req, res) => {
  try {
    const person = await FavPeople.findByIdAndDelete(req.params.id);
    if (!person) res.status(404).send('No person found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
