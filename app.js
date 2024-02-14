"use strict";


$('form').on('submit', fetchGiphy);

async function fetchGiphy(evt) {
  evt.preventDefault();

  const value = $('#search-term').val();
  const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  const data = await response.json();

  displayGif(data);
  
}