
function feeditem (title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkURL = linkUrl;
    this.imageURL = imageUrl;
}

exports.createfeedItem = function(title, body, linkUrl, imageUrl){
    return new feeditem(title, body, linkUrl, imageUrl);

};

console.log("model running");