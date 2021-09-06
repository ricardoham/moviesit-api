const axios = require('axios').default;
const auth = require('./auth.controller');
const { Users } = require('../model/users.model');

const domain = process.env.AUTH0_DOMAIN;

exports.user_details = async (req, res) => {
  try {
    const mgmToken = await auth.auth_get_token();

    const options = {
      method: 'GET',
      url: `https://${domain}/api/v2/users`,
      params: { q: `user_id:${req.params.id}`, search_engine: 'v3' },
      headers: { authorization: `Bearer ${mgmToken.access_token}` },
    };

    const response = await axios.request(options);
    if (!response.data) res.status(404).send('No user found');

    const userResponse = response.data.map((item) => {
      const user = new Users(
        item.user_id,
        item.name,
        item.picture,
      );
      return user;
    });
    res.status(200).send(userResponse[0]);
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};
