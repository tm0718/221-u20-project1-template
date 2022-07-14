var basketball = require('../model/basketballitem')

var basketballs = [];

let basketball1 = new basketball.createbasketball("Pracitce Shot","Need help with your shot?","https://bit.ly/3atwXD8","https://bit.ly/3o3t0bG");
let basketball2 = new basketball.createbasketball("Practive Dribbling","Need help with dribbling?","https://bit.ly/3apvbTJ","https://bit.ly/3APvQZu");
let basketball3 = new basketball.createbasketball("Practice Defense","Need help with your Defense?","https://bit.ly/3NO8syo","https://bit.ly/3yHtV6z");
basketballs.push(basketball1);
basketballs.push(basketball2);
basketballs.push(basketball3);


exports.getbasketballs = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(basketballs);
}

exports.savebasketball = function(req, res) {
	let feeditem = basketballs.createfeeditem(req.body.title, req.body.body, req.body.linkURL, req.body.imageURL);
	basketballs.push(newfeeditem);
	res.setHeader('Content-Type', 'application/json');
	res.send(basketballs);
}

exports.getbasketball = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(basketballs[req.params.basketballId]);
}

exports.deletebasketball = function(req, res) {
	basketballs.splice(req.params.basketballId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(basketballs);
}

exports.updatebasketball = function(req, res) {
	// get the existing basketball from the array
	var updatedbasketball = basketballs[req.params.basketballId];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
        updatedbasketball.title = req.body.title;
	if(req.body.body)
		updatedbasketball.body = req.body.body;
	if(req.body.linkURL)
		updatedbasketball.linkURL = req.body.linkURL;
	if(req.body.ima)
		updatedbasketball.imageURL = req.body.imageURL;

	// save the local copy of the basketball back into the array
	basketballs[req.params.basketballId] = updatedbasketball;

	res.setHeader('Content-Type', 'application/json');
	res.send(basketballs[req.params.basketballId]);
}