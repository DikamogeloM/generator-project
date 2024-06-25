function generateDj(event) {
  event.preventDefault();

  new Typewriter("#dj-answer-generated", {
    strings: ["The cue button is to mark in the track"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let djFormElement = document.querySelector("#dj-generator-form");
djFormElement.addEventListener("submit", generateDj);
