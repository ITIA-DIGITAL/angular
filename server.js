/**
 * Thanks to:
 * https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147
 */

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/itia'));

/**
 * Redirect http to https,
 * Thanks to:
 * https://stackoverflow.com/a/7261883
 */
app.get('*', function(req,res,next) {
    if(req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production')
        res.redirect('https://'+req.hostname+req.url);
    else
        next() /* Continue to other routes if we're not redirecting */
});

/* Respond with index.html */
app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/itia/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);