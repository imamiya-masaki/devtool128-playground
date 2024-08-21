const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/sample3', (req, res) => {
    res.send(`
        <script src="sample3.js"></script>
    `);
});

app.get('/sample3-defer', (req, res) => {
  res.send(`
      <script src="sample3-defer.js"></script>
  `);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
