const express = require("express");
const bodyParser = require("body-parser");
const connectToDb = require("./config/db");
const memberRoutes = require('./routes/memberRoutes');
const bookRoutes = require('./routes/bookRoutes');
const issueRoutes = require('./routes/issueRoutes');
const cors = require('cors');

const app = express();

// Connecting to MongoDB Database
connectToDb();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());



// ROUTERS

// Checking The Health of My API
app.get('/api/test', (req,res)=>{
    res.send("Health check, API is working !!");
  });
// Use the memberRoutes for /v1/api
app.use('/v1/api', memberRoutes);

// Use the bookRoutes for /v1/api
app.use('/v1/api', bookRoutes);

// Use the issueRoutes for /api
app.use('/v1/api', issueRoutes);

module.exports = app;