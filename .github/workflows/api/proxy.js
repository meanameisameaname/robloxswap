const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const path = req.query.path;
  const apiUrl = `https://api.roblox.com/${path}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
};

