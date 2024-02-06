//TIPS from professor - learn promises
// lear about mine types


//wait until the pafe loads
window.onload = async function() {

    const uri = "http://localhost:3000/api/v1/movies/all";
    const config = {
        method: 'get'
    }

    const response = await fetch(uri, config);
    const data = await response.json();
    showMovies(data);

//this is FEB 6 2024
    const button = document.querySelector("button")
    button.onclick = addMovie;
}




    async function addMovie(event) {

        //STOPS THE FORM FROM SUBMITTING
        event.preventDefault();


        const newMovie = {
            title: document.querySelector("#tittle").value,
            genre: document.querySelector("#genre").value
        }

        //JSON.PARSE() WILL CONVERT FROM JSON TEXT TO JS OBJECT
        //JASON.STRINGIFY WILL CONVERT JS OBJECT TO JSON TEXT
        const uri = "http://localhost:3000/api/v1/movies";

        const config = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        }

        const response = await fetch(uri, config)
        const movie = await response.json()

        const  section = document.querySelector("#movies")
        addMoviesSection(section, movie);
    }



    function addMoviesSection(section, movie){
        section.innerHTML += `<div class="movie"> <h2>${movie.title}</h2> <p>ID ${movie.id}</p> <p>Genre: ${movie.genre}</p> </div>`;

    }



    function showMovies(movies) {
        //select form our movie.html page the movie id
        const section = document.querySelector("#movies")
        console.log(section);

        //loop over my moves and add a nested element

        for (let i = 0; i < movies.length ; i++) {

            const movie = movies[i];

            addMoviesSection(section, movie);

        }
        //test connection
        //section.innerHTML = "<p> hello it worked!</p>";
    }
