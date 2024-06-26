function displayDjAnswer(response) {
  new Typewriter("#dj-answer-generated", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateDj(event) {
  event.preventDefault();

  let instructionsInputs = document.querySelector("#user-instructions");
  let apiKey = "4fft9ab4oba0fa5c5b989ee6eb4b9143";
  let context =
    "You are a Dj expect and know everything about Djing. Your mission is to provide short and sweet answer to any Dj question";
  let prompt = `Generate a DJ answer ${instructionsInputs.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let djElement = document.querySelector("#dj-answer-generated");
  djElement.classList.remove("hidden");
  djElement.innerHTML = `<span class="blink">⌛</span> Generating answer for you about ${instructionsInputs.value}`;

  axios.get(apiURL).then(displayDjAnswer);
}

let djFormElement = document.querySelector("#dj-generator-form");
djFormElement.addEventListener("submit", generateDj);
