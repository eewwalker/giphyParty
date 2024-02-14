"use strict";

const DAD_JOKE_URL = 'https://icanhazdadjoke.com/';

const $dadJokesContainer = $('.dad-jokes');




async function fetchJoke() {
  const response = await fetch(`${DAD_JOKE_URL}`, { headers: { Accept: 'application/json' } });
  const data = await response.json();

  return data.joke;
}


async function getRandomJoke() {
  for (let i = 0; i < 10; i++) {
    const joke = await fetchJoke();
    const $jokeDiv = $('<div>').text(joke);
    const voteUpBtn = $('<button>').text('vote-up').addClass('upBtn');
    const voteDownBtn = $('<button>').text('vote-down').addClass('downBtn');
    let score = $('<span>').text('0');
    $jokeDiv.append(voteUpBtn, voteDownBtn, score);
    $dadJokesContainer.append($jokeDiv);
  }

}

$dadJokesContainer.on('click', '.upBtn', function (evt) {

  const $score = $(evt.target).next().next();
  let numberScore = Number($score.text());
  numberScore++;
  $score.text(numberScore.toString());
});

$dadJokesContainer.on('click', '.downBtn', function (evt) {

  const $score = $(evt.target).next();
  let numberScore = Number($score.text());
  numberScore--;
  $score.text(numberScore.toString());
});

getRandomJoke();


