const axios = require('axios').default;

const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;

const options = {
  method: 'POST',
  url: 'https://dev-uyrl2qcq.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  data: {
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
    audience: 'https://dev-uyrl2qcq.us.auth0.com/api/v2/',
  },
};

exports.auth_get_token = async () => {
  try {
    const token = await axios.request(options);
    return token.data;
  } catch (error) {
    console.error('AUTH----', error);
    throw error;
  }
};
