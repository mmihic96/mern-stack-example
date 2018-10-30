var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var cors = require('cors')

var mongoConfig = require('./config/mongo.config');

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

// Users API
app.use('/api', require('./routes/index.routes.js'));

mongoose.connect(`${mongoConfig.getUrl()}`).then(() => {
    console.log(`Connected to database ${mongoConfig.database}`);
}).catch((error) => {
    console.log(error);
});


server.listen(3000, function () {
    console.info('Express listen on *:3000');
});

module.exports = app;