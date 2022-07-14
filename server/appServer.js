const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})


//-------------------------------------------------------------------------feed----

var feedItems = require('./controller/feedController');

app.route('/api/feedItems')
    .get(feedItems.getfeeditems)
    .post(feedItems.savefeeditem)
    
app.route('/api/feedItems/:feedItemId')
    .get(feedItems.getfeeditem)
    .patch(feedItems.updatefeeditem)
    .delete(feedItems.deletefeeditem)


//-----------------------------------------------------------------------------

var basketballs = require('./controller/basketballController');

app.route('/api/basketballs')
    .get(basketballs.getbasketballs)
    .post(basketballs.savebasketball);
    
app.route('/api/basketballs/:basketballId')
    .get(basketballs.getbasketball)
    .patch(basketballs.updatebasketball)
    .delete(basketballs.deletebasketball)

app.listen(1337, function () {
    console.log('Example app listening on port 1337!');
})
