const CORS_URL = "https://noroffcors.herokuapp.com/";
const url =
  CORS_URL +
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b80501c2ec3a4966a7d6e063cb248851";

const gamesContainer = document.querySelector(".games");

async function callRAWGApi() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;
    gamesContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }
      gamesContainer.innerHTML += `<div class="video-game"><p>Name: ${games[i].name}</p>
    <p>Rating: ${games[i].rating}</p>
    <p>Tags: ${games[i].tags.length}</p></div>`;
    }
  } catch (error) {
    gamesContainer.innerHTML = errorMessage("Something unexpected happened");
  }
}
callRAWGApi();
