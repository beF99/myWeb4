const express = require('express');
const path = require('path');

const app = express();
// var http = require('http').createServer(app);

app.set('port', (process.env.PORT || 5000))

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-web4'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-web4/index.html'));
});


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  })
// Start the app by listening on the default Heroku port
//  app.listen(process.env.PORT || 8080);

// http.listen(process.env.PORT || 3000, function () {
//     console.log('listening on * localhost:3000');
// });