// require('dotenv').config();
var axios = require("axios");
var spotify = require("node-spotify-api");


// Code required to import the keys.js file, stored as variable keys.
var keys = require("./keys.js");
var fs = require("fs");



// Take input arguments [2] ("concert-this" || "spotify-this-song" || "movie-this ") + [3]
var selectSearch = process.argv[2];
var value = process.argv[3];

// I'm using switch-case statement
switch (selectSearch) {
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
function concertThis() {
    if (selectSearch === "concert-this") {
        axios.get("https://rest.bandsintown.com/artists/events?app_id=codingbootcamp" + value)
        .then(function(response){
                  //console.log(response.data);
        //    if(!response.data){
                      //console.log("No events found for this artist "+ artist);
            // }else{
                console.log(response.data);
           }
        );

        }
    
  

function spotifyThisSong() {
    if (selectSearch === "spotify-this-song") {
        console.log("This option will search for songs on Spotify!");
    }
}

// function which uses axios call for omdb API with responses consoled.
function movieThis() {
    if (selectSearch === "movie-this") {
        axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + value).then(
            function (response) {
                console.log("The movie: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log(response.data.Ratings[1]);
                console.log("Production Country: " + response.data.Country);
                console.log("Lanugage: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        );

    }


}
}
