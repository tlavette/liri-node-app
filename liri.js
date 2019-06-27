require('dotenv').config();
var axios = require("axios");
var Spotify = require("node-spotify-api");


// Code required to import the keys.js file, stored as variable keys.
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");



// Take input arguments [2] ("concert-this" || "spotify-this-song" || "movie-this ") + [3]
var selectSearch = process.argv[2];
var value = process.argv.slice(3).join().replace(",","+");
console.log("this is: " + process.argv.slice(3).join().replace(",","+"));

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
        // axios.get("https://rest.bandsintown.com/artists/events?app_id=codingbootcamp" + value)
        axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
        .then(function(response){
            console.log(response.data[0]);
            for (let i=0; i<response.data.length; i++){
                // console.log(response.data);
                console.log("Event Date: " + response.data[i].datetime);
                console.log("The Venue: " + response.data[i].venue.name);
                console.log("The Location: " + response.data[i].venue.city);
                console.log("############################################ \n");
               

            }
            })



                  //console.log(response.data);
        //    if(!response.data){
                      //console.log("No events found for this artist "+ artist);
            // }else{
                // console.log(response.data);
                // console.log("Event Date: " + response.data[i].datetime);
                // console.log("The Venue: " + response.data[1].venue.name);
                // console.log("The Location: " + response.data[1].venue.city);
                // console.log("The date: " + resp
                // console.log("Venue: " + response.data.name);
                // console.log("Location: " + response.data.city);
           }
       

        }

  

function spotifyThisSong() {
    if (selectSearch === "spotify-this-song") {
        console.log("#############   I hope this works!!!! #######################")

           
          spotify.search({ type: 'track', query: 'Purple Rain' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
    }
}

// function which uses axios call for omdb API with responses consoled.
function movieThis() {
    if (selectSearch === "movie-this") {
        console.log("movie this is selected");
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
