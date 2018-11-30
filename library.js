const Library = function (name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function (playlist) {
    this.playlists.push(playlist);
}

module.exports = Library;