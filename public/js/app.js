// Init API

const omdb = new OMDB();

// Init UI

const ui = new UI();

// Get Movies

document.addEventListener('DOMContentLoaded', getMovies);



//search Movies 

document.getElementById('searchForm').addEventListener('submit', searchMovie);


//Get movies function

function getMovies() {

    //Make a request to API
    omdb.getMovies().then(results => {
        ui.showMovies(results.movie);
        ui.showSeries(results.series);
        // console.log(results.movie);
        // console.log(results.series);

    }).catch(err => {
        console.log(err);
    })

}

//search movie function

function searchMovie(e) {

    const inputText = document.querySelector('.search');

    // console.log(inputText.value);

    // Get Input Text 
    const userText = inputText.value;
    //console.log(userText);

    // Make a call to API

    omdb.search(userText).then(results => {

        ui.showSearch(results);

    }).catch(err => {
        console.log(err);
    })
    e.preventDefault();
}


//Movie Clicked


function movieClicked(id) {
    //console.log(id);
    sessionStorage.setItem('movieID', id);
    location.assign('./public/html/movie.html');
    return false;



}

//Movie Info come from movie.html class

function movie_info() {
    let id = sessionStorage.getItem('movieID');
    //console.log(id);

    //make a call OMDB API

    omdb.movieInfo(id).then(results => {
        ui.showInfo(results);
    }).catch(err => {
        console.log(err);
    })

}
