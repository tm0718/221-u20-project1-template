function basketball (color, size, offense, imageUrl) {
    this.color = color;
    this.shooting= this.shooting;
    this.defense = this.defense;
    this.dribbling = this.dribbling;
}

exports.createbasketball = function(color, shooting, defense, dribbling){
    return new basketball(color, shooting, defense, dribbling);

};

console.log("model running");