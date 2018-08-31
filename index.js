require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port;

require('./startup/app')(app, port);
