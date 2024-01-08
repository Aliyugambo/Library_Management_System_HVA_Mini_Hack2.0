const express = require("express");
const bodyParser = require("body-parser");
const connectToDb = require("./config/db");
const memberRoutes = require('./routes/memberRoutes');
const bookRoutes = require('./routes/bookRoutes');
const issueRoutes = require('./routes/issueRoutes');


const app = express();

// Connecting to MongoDB Database
connectToDb();

// Middleware to parse JSON requests
app.use(express.json());

// ROUTERS

// Use the memberRoutes for /v1/api
app.use('/v1/api', memberRoutes);

// Use the bookRoutes for /v1/api
app.use('/v1/api', bookRoutes);

// Use the issueRoutes for /api
app.use('/v1/api', issueRoutes);

module.exports = app;