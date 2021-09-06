const Recommendations = require('../model/recommendations.model');
const Profile = require('../model/profile.model');
const FavMovies = require('../model/fav-movies.model');
const FavPeople = require('../model/fav-people.model');
const WaitList = require('../model/waitlist.model');
const BanComments = require('../model/bancomment.model');

const currentMonthTotal = (item) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const total = item.filter((i) => i.createdAt.getMonth() === currentMonth);
  return total.length;
};

exports.generate_report = async (req, res) => {
  try {
    const recommendations = await Recommendations.find({});
    const profile = await Profile.find({});
    const favMovies = await FavMovies.find({});
    const favPeople = await FavPeople.find({});
    const waitlist = await WaitList.find({});
    const banComments = await BanComments.find({});

    const report = {
      recommendations: {
        total: recommendations.length,
        currentMonthTotal: currentMonthTotal(recommendations),
      },
      profile: {
        total: profile.length,
        currentMonthTotal: currentMonthTotal(profile),
      },
      favMovies: {
        total: favMovies.length,
        currentMonthTotal: currentMonthTotal(favMovies),
      },
      favPeople: {
        total: favPeople.length,
        currentMonthTotal: currentMonthTotal(favPeople),
      },
      waitlist: {
        total: waitlist.length,
        currentMonthTotal: currentMonthTotal(waitlist),
      },
      banComments: {
        total: banComments.length,
        currentMonthTotal: currentMonthTotal(banComments),
      },
    };
    res.status(200).send(report);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
};
