require("dotenv").config();
const express = require("express");
const path = require('path');
const userRoutes =require('./profile/profile.router')
const expressValidator = require('express-validator')
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());




app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.use(userRoutes);
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server started on port ` + port));
