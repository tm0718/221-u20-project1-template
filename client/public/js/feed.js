document.getElementById("portal_button").addEventListener("click", ()=> goToLocation("https://youtu.be/EKoiKKelQIM"));


///creates items for the feed
function feeditem (title, body, linkURL, imageURL) {
    this.title = title;
    this.body = body;
    this.linkURL = linkURL;
    this.imageURL = imageURL;
}
///makes stories with all the items
let story1 = new feeditem("Pracitce Shot","Need help with your shot?","https://bit.ly/3atwXD8","../images/hancock.jpeg");
let story2 = new feeditem("Practive Dribbling","Need help with dribbling?","https://bit.ly/3apvbTJ","../images/profile_pic.png");
let story3 = new feeditem("Practice Defense","Need help with your Defense?","https://bit.ly/3NO8syo","../images/news_pic.jpg");

let currentStories = [story1, story2, story3];

function displayItem() {
for (var i = 0; i< currentStories.length; i++) {
    let item = currentStories[i];
    document.getElementById("newsfeed").innerHTML += "<img class = 'feedImage' src='" + item.imageURL + "'><a href ='" + item.linkURL + "'>link </a>" + "<div>" + item.title + "</div>" + "<div>" + item.body + "</div>" ;
}
}

window.addEventListener("load",displayItem);
   








 