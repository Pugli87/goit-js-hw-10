// keys the Cat API
//live_6xQUElFdFTDJFzptsVrEfgwlEfCFOu0dcC3VKzRePi1XDOiI9r62RJ6LiRGtC5sW
import Notiflix from 'notiflix';
const errorPage = document.querySelector('.error');
const loaderPage = document.querySelector('.loader');
const filter = document.querySelector('.breed-select');

errorPage.setAttribute('hidden', true);
loaderPage.setAttribute('hidden', true);

filter.style.color = 'red';

// inicio tarea
fetch(
  'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME',
  {
    header: {
      'x-api-key':
        'live_6xQUElFdFTDJFzptsVrEfgwlEfCFOu0dcC3VKzRePi1XDOiI9r62RJ6LiRGtC5sW',
    },
  }
)
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });