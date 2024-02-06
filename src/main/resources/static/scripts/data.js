//wait until the pafe loads
window.onload = function(){

    const usi = "http://localhost:3000/api/v1/movies/all";
    const config = {
        method: 'get'
    }
    fetch(usi, config)
        .then(function(response) {
            console.log(response)

            //return another promise
            return response.json();

        })
        .then(function (data){
            console.log(data)
            showMovies(data);
        });



}

function showMovies(movies) {
    //select form our movie.html page the movie id
    const section = document.querySelector("#movies")
    console.log(section);

    //loop over my moves and add a nested element

    for (let i = 0; i < movies.length ; i++) {

        const movie = movies[i];

        section.innerHTML += `<div class="movie"> <h2>${movie.title}</h2> <p>ID ${movie.id}</p> <p>Genre: ${movie.genre}</p> </div>`;

    }
    //test connection
    //section.innerHTML = "<p> hello it worked!</p>";
}
