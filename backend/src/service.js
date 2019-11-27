/// Requires ///
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/// Configurations ///
const app = express();
const port = 3000;
const routes = require('./routes');

/// Uses ///
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Caminho inicial das rotas
app.use('/sensor', routes);

/// Connection MongoBD ///
mongoose.connect('mongodb+srv://site1:3Q4Xhi5ZGnAT1YJf@arduinonodejs-1i5yp.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

app.get('/', function(req, res) {
    res.status(200).send('Service is UP!');
});

app.listen(port, function() {
    console.log('Server is running on PORT:',port);
});
