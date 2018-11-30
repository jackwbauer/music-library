const Library = require('./library');
const Playlist = require('./playlist');
const Track = require('./track');

const library = new Library('Jack', 'music');

const playlist = new Playlist('workout');
library.addPlaylist(playlist);

const track1 = new Track('song1', 100, 5);
const track2 = new Track('song2', 150, 1);
const track3 = new Track('song3', 124, 2);
const track4 = new Track('song4', 475, 8);
const track5 = new Track('song5', 452, 4);
const track6 = new Track('song6', 112, 6);
const track7 = new Track('song7', 171, 8);
playlist.addTrack(track1);
playlist.addTrack(track2);
playlist.addTrack(track3);
playlist.addTrack(track4);
playlist.addTrack(track5);
playlist.addTrack(track6);
playlist.addTrack(track7);

console.log(library);
console.log(library.playlists[0].tracks);
console.log(library.playlists[0].overallRating());
console.log(library.playlists[0].totalLength());
console.log(library.playlists[0].totalRating);
