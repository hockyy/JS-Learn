const toggleAddModalButton = document.querySelector("header button");
const deleteModal = document.querySelector("#delete-modal");
const addModal = document.querySelector("#add-modal");

const backdrop = document.querySelector("#backdrop");
const addButton = addModal.querySelector(".btn--success");
const cancelAddButton = addModal.querySelector(".btn--passive");

const deleteButton = deleteModal.querySelector(".btn--danger");
const cancelDeleteButton = deleteModal.querySelector(".btn--passive");

const userInputs = addModal.querySelectorAll("input");

const entryText = document.querySelector("#entry-text");
const listRoot = document.querySelector("#movie-list");
const movies = [];

let deleteMovieID = null;

function updateUI(){
  entryText.style.display = "block";
  if(movies.length) entryText.style.display = "none";
}

function addMovieElement(movie){
  const movieEl = document.createElement('li');
  movieEl.classList.add("movie-element");
  movieEl.innerHTML = `
    <div class="movie-element__image">
      <img src = "${movie.imageURL}" alt = "${movie.title}">
    </div>
    <div class="movie-element__info">
      <h2>${movie.title}</h2>
      <p>${movie.rating}/5 stars!</p>
    </div>
  `;
  movieEl.addEventListener("click",deleteMovieHandler.bind(null, movie.id));
  listRoot.append(movieEl);
}

function clearInputs(){
  for(const userInput of userInputs){
    userInput.value = "";
  }
}

function toggleModal(modalHandler) {
  backdrop.classList.toggle("visible");
  modalHandler();
}

function toggleDeleteModal(){
  deleteModal.classList.toggle("visible")
  backdrop.addEventListener("click", toggleModal.bind(null, toggleDeleteModal));
}

function toggleAddModal(){
  addModal.classList.toggle("visible");
  backdrop.addEventListener("click", toggleModal.bind(null, removeAddModal)); 
}

function removeAddModal(){
  toggleAddModal();
  clearInputs();
}

function deleteMovieHandler(movieID){
  toggleModal(toggleDeleteModal);
  deleteMovieID = movieID;
}

function deleteMovie(){
  console.log("Trying to delete "+deleteMovieID);
  let idx;
  for (idx = 0; idx < movies.length; idx++) {
    if (movies[idx].id === deleteMovieID) break;
  }
  movies.splice(idx, 1);
  listRoot.children[idx].remove();
  updateUI();
  toggleModal(toggleDeleteModal);
}

function addMovieHandler() {
  const movieData = {
    id: Math.random().toString(),
    title: userInputs[0].value.trim(),
    imageURL: userInputs[1].value.trim(),
    rating: parseInt(userInputs[2].value),
  };
  try {
    if(movieData.title === "") throw "Title must not be empty!";
    if(movieData.imageURL === "") throw "image URL must not be empty!";
    if(isNaN(movieData.rating)) throw "Invalid rating!";
    if(movieData.rating < 1 || movieData.rating > 5) throw "Rating must be between 1-5";
    console.log(movieData);
    console.log(movies);
    alert(`Inserting "${movieData.title}" with ${movieData.rating}/5 rating!`)
    movies.push(movieData);
    updateUI();
    addMovieElement(movieData);
    toggleModal(removeAddModal);
  } catch (error) {
    alert(error);
  }
}

toggleAddModalButton.addEventListener("click", toggleModal.bind(null, toggleAddModal));
cancelAddButton.addEventListener("click", toggleModal.bind(null, removeAddModal));
cancelDeleteButton.addEventListener("click", toggleModal.bind(null, toggleDeleteModal));
addButton.addEventListener("click", addMovieHandler);
deleteButton.addEventListener("click", deleteMovie);