// Hardcoded array of joke objects
// Each joke object has a unique id

// Main function to retrieve and display a new joke
async function getAndDisplayNewJoke() {
  const joke = await retrieveJoke();
  displayJoke(joke);
}

//function to retrieve a random joke
async function jokes(){
  let response = await fetch("https://icanhazdadjoke.com", {
  headers: {Accept:"application/json", 
  },
});


// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke.joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);

// console.log(response);
const data = response.json(); 
console.log(data.joke); 
jokes();






















// let grabJoke = document.getElementById("joke")
// let clickJoke = document.getElementById("newJokeBtn");

// function changeJoke () {
//   grabJoke.textContent = data.joke ;
// }

// clickJoke.addEventListener ("click", changeJoke)




// fetched from API, tested and working - DONE
// grab 'joke' element - DONE

// find a way to display the random joke into getElementById = joke

// AddEventListener to change joke when button pressed
}