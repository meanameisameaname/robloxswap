const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { path } = req.query;
  const apiUrl = `https://api.roblox.com/${path}`;
  const response = await fetch(apiUrl);
  const data = await response.text();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(data);
};
