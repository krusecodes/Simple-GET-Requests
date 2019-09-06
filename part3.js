'use strict';

let numOfDogs = 1;

function getDogImage(typeOfDogs) {
  fetch(`https://dog.ceo/api/breed/${typeOfDogs}/images`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.status);
  if (responseJson.status==="error") {
    $('.results').html(`<h2>Sorry, this does not exist. Try Something else!</h2>`);
  } else {
  $('.results').html(`<h2>Look at these dogs!</h2>`);
     $('.results').append(
     `<img src="${responseJson.message[0]}" class="results-img" width="200" height="auto">`);
  $('.results').removeClass('hidden'); 
}
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numOfDogs = $('input[name="typeOfDogs"]').val();
    getDogImage(numOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});