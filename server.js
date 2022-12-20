const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/agora'));

app.get('/*', function(req,res) {
    if(req.secure ){
        res.redirect(`https://${req.hostname}${req.url != '/undefined' ? req.url : ''}`)
        return
    }
    res.sendFile(path.join(__dirname+'/dist/agora/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);