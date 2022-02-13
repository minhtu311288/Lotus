const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');

const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
//Set secret key
app.use(cookieParser('minhtu'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Passed CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// http logger
// app.use(morgan('combined'));

//Template engine
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/scripts', express.static(__dirname + '/node_modules/web3.js-browser/build'));

//socket
var server = require('http').Server(app);
const io = require('socket.io')(server);
//routes
route(app);
//Connect DB
const db = require('./config/db');
db.connect();
app.listen(port, () => {
  console.log(`Lotus server listening at http://localhost:${port}`)
});