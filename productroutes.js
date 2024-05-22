const express = require('express');
const productroutes = express.Router();


productroutes.get('/routes', function (req, res)  {

    res.status(200).json({ message: 'Internal Server Error' });
  }
);

module.exports = productroutes;
