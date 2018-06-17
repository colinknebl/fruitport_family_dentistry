const express       = require('express'),
      app           = express(),
      path          = require('path'),
      http          = require('http'),
      routes        = require('./routes/routes');

// POINT STATIC PATH TO DIST FOLDER
app.use(express.static(path.join(__dirname, '/ffdwebapp/dist')));

// REGISTER API AND ROUTES
app.use(routes);

// GET PORT FROM ENVIRONMENT AND STORE IN EXPRESS
const port = process.env.PORT || '5000';
app.set('port', port);

// CREATE HTTP SERVER
const server = http.createServer(app);

// LISTEN ON SPECIFIED PORT FOR NETWORK REQUESTS
server.listen(port, () => console.log(`API running on localhost:${port}`));