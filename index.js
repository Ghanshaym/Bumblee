const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const connection = require('./connection/connect');
const route = require('./route');
const app = express();
const morgan = require('morgan')

// const socket = require('../server/sockets/index');
// const cronJob=require('../server/v1/cron/cronjobs');

const server = require('http').createServer(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', route);
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(cors())
app.use('*', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,authtoken"
    );
    next();
  });
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  })
  
app.use('/static', express.static(path.join(__dirname+'/uploads')));

app.use(express.static((path.join(__dirname,"../server/swagger"))));
// const io = require('socket.io')(server)
// socket(io)

connection.connect().then(success => {
  app.listen(3000, () => {
        console.log(`Running on port ${config.port}.`);
        console.log(success);
    });
}).catch(error => {
    console.log("err",error);
    console.log('Db not connected!')
});

// cronJob.startCronJobs();

