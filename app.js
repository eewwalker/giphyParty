"use strict";

const GIPHY_URL = "http://api.giphy.com/v1/";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $container = $("#gif-container");

$('form').on('submit', fetchGiphy);

async function gettingDataFromApi() {

  const value = $('#search-term').val();
  const params = new URLSearchParams({q: value, api_key: API_KEY});
  const response = await fetch(`${GIPHY_URL}gifs/search?${params}`);
  const data = await response.json();
  return data;
}

async function fetchGiphy(evt) {
  evt.preventDefault();
  const data = await gettingDataFromApi();
  displayGif(data.data[0].images.original.url);
}

function displayGif(url) {
  const $gif = $("<img>");
  $gif.attr("src", url);
  $container.append($gif);
}

$('#remove-images-btn').on('click', removeGifs);

function removeGifs() {
  $container.empty();
}