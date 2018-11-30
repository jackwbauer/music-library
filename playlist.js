let Playlist = function(name) {
    this.name = name;
    this.tracks = [];
    this.totalRating = 0;
}

Playlist.prototype.addTrack = function(track) {
    this.tracks.push(track);
    this.totalRating += track.rating;
}

Playlist.prototype.overallRating = function() {
     return this.totalRating / this.tracks.length;
}

Playlist.prototype.totalLength = function() {
    return this.tracks.reduce((total, track) => {
        return total + track.length;
    }, 0);
}

module.exports = Playlist;
