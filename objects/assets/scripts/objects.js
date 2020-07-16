const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

movies = []

function addMovieHandler(){
  const title = document.getElementById("title").value.trim();
  const extraName = document.getElementById("extra-name").value.trim();
  const extraValue = document.getElementById("extra-value").value.trim();
  if(title === "") return;
  if(extraName === "") return;
  if(extraValue === "") return;
  
  const newMovie = {
    info:{
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle(){
      return this.info.title.toUpperCase();
    }
  }

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
}



function renderMovies(filter = ""){
  
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";

  (!filter ? movies : movies.filter(movie => movie.info.title.includes(filter))).forEach((movie) =>{
    const movieEl = document.createElement("li");

    
    // const { title:movieTitle } = movie.info
    // console.log(movieTitle);

    let text = movie.getFormattedTitle();

    for(const key in movie.info){
      if(key !== "title"){
        text += `: ${key} - ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;

    movieList.append(movieEl);

    
  });

  if (movieList.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
}

function searchMovieHandler(){
  const filterTerm = document.getElementById("filter-title").value.trim();
  console.log(filterTerm);
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);