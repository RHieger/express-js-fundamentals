var express = require('express');

// Create a handle for methods exposed by Express:

var app = express();

// Set server port:

var port = 8000;

// Start server:

app.listen( port, (err, res) =>  {

    if (err)  {

        console.log('Sever error.');

    }   else    {

        console.log('Server started. Listening on Port 8000...');

    }   // end-if-else

});
