const express = require('express'),
      router  = express.Router(),
      directoryName = __dirname.slice(0, __dirname.length - 6);


// INDEX ROUTE
router.get('/', (req, res) => {
  res.sendFile(directoryName + '/ffdwebapp/dist/index.html');
});


// CATCH ALL OTHER ROUTES AND SEND THE INDEX ROUTE
router.get('*', (req, res) => {
  res.redirect('/');
});

module.exports = router;