const express = require('express');
const app = express()
const mongoose = require("mongoose")
const PersonRoute = require("./routes/person")
require("dotenv").config()

//mongoose.connect(process.env.LOCAL_MONGODB_URI)
mongoose.connect(process.env.CLOUD_MONGODB_URI)
const db = mongoose.connection

db.on('err', (err) => console.log(err))

db.once('open', () => console.log('Database Connection Established'))

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", PersonRoute)

module.exports = app