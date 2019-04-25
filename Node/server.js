const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const index = require('./server/routes/index');

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); app.use(bodyParser.urlencoded({extended: true})); app.use(bodyParser.json());
app.use('/api', api);
app.use('/',index);

app.listen(port, function(){
       console.log("Server running on localhost:" + port);
});
