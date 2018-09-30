var express = require('express');

// Create a handle for methods exposed by Express:

var app = express();

// Set server port:

var port = 8000;

// SPECIFY EXPFRESS METHODS NEEDED:

app.use( body-parser() );

app.use( cookieParser() );

// Set Default Route:

app.get('/',  log, hello);

// MIDDLEWARE METHODS:

function log(req, res, next)  {

    console.log(new Date(), req.method, req.url);

    next();

}   // end log()

function hello(req, res, next)  {

    res.write('Hello\n' + 'World');

    res.end();

    next();

}   // end hello()

// Start server:

app.listen( port, (err, res) =>  {

    if (err)  {

        console.log('Sever error.');

    }   else    {

        console.log('Server started. Listening on Port 8000...');

    }   // end-if-else

});
