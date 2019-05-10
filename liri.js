require('dotenv').config();
// Code required to import the keys.js file, stored as variable keys.
var keys = require("./keys.js");
var fs = require("fs");


// Take input arguments [2] ("concert-this" || "spotify-this-song" || "movie-this ") + [3]
var selectSearch = process.argv[2];
var value = process.argv[3];

// I'm using switch-case statement
switch(selectSearch) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;
}


// functions defined for each to initially console log option.
function concertThis(){
    if (selectSearch === "concert-this") {
        console.log("This option will search bands in town!");

    }    
}

function spotifyThisSong(){
    if(selectSearch === "spotify-this-song"){
        console.log("This option will search for songs on Spotify!");
    }
}

function movieThis(){
    if(selectSearch === "movie-this"){
        console.log("This 0ption will search movie information!");
    }
}



