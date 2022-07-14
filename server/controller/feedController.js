var feeditem = require('../model/feedItem')

var stories = [];

let story1 = new feeditem.createfeedItem("Pracitce Shot","Need help with your shot?","https://bit.ly/3atwXD8","https://bit.ly/3o3t0bG");
let story2 = new feeditem.createfeedItem("Practive Dribbling","Need help with dribbling?","https://bit.ly/3apvbTJ","https://bit.ly/3APvQZu");
let story3 = new feeditem.createfeedItem("Practice Defense","Need help with your Defense?","https://bit.ly/3NO8syo","https://bit.ly/3yHtV6z");
stories.push(story1);
stories.push(story2);
stories.push(story3);


exports.getfeeditems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.savefeeditem = function(req, res) {
	let newfeeditem = feeditem.createfeedItem(req.body.title, req.body.body, req.body.linkURL, req.body.imageURL);
	stories.push(newfeeditem);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.getfeeditem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(stories[req.params.feeditemId]);
}

exports.deletefeeditem = function(req, res) {
	stories.splice(req.params.feeditemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(stories);
}

exports.updatefeeditem = function(req, res) {
	// get the existing feeditem from the array
	var updatedfeeditem = stories[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
        updatedfeeditem.title = req.body.title;
	if(req.body.body)
		updatedfeeditem.body = req.body.body;
	if(req.body.linkURL)
		updatedfeeditem.linkURL = req.body.linkURL;
	if(req.body.ima)
		updatedfeeditem.imageURL = req.body.imageURL;

	// save the local copy of the feeditem back into the array
	stories[req.params.feeditemId] = updatedfeeditem;

	res.setHeader('Content-Type', 'application/json');
	res.send(stories[req.params.feeditemId]);
}