const express = require('express');
const app = express();
const moment = require("moment")
const port = 2000;

// Define a GET endpoint
app.get('/api', (req, res) => {
  // Get query parameters from the request
  const { slack_name, track } = req.query

  // Check if both parameters are provided
  if (!slack_name || !track) {
      return res.status(400).json({ error: 'Both params are required.' });
  }
  const currentDay = moment().format('dddd');
  const github_file_url = "https://github.com/festuscharles/hng_task/blob/main/index.js"
  const github_repo_url = "https://github.com/festuscharles/hng_task"

  const responseData = {
      slack_name,
      current_day: currentDay,
      utc_time: new Date().toISOString().split('.')[0]+'Z',
      track,
      github_file_url,
      github_repo_url,
      status_code: 200
  };

  // Return the response in JSON format
  res.status(200).json(responseData);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});