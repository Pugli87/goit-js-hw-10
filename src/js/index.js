import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from '../js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.getElementById('loader');
const error = document.getElementById('error');
const catInfo = document.getElementById('cat-info');

// funciones para ocultar(hide) o mastrar(show) contenido
function showLoader() {
	loader.style.display = 'block';
}

function hideLoader() {
	loader.style.display = 'none';
}

function showError() {
	error.style.display = 'block';
}

function hideError() {
	error.style.display = 'none';
}

function populateBreedSelect(breeds) {
	breeds.forEach(breed => {
		const option = document.createElement('option');
		option.value = breed.id;
		option.text = breed.name;
		breedSelect.appendChild(option);
	});
}

function displayCatInfo(cat) {
	catInfo.innerHTML = `
			<h2>${cat[0].breeds[0].name}</h2>
			<p><strong>Description:</strong> ${cat[0].breeds[0].description}</p>
			<p><strong>Temperament:</strong> ${cat[0].breeds[0].temperament}</p>

			<img src="${cat[0].url}" alt="Cat Image"/>
		`;
}

breedSelect.addEventListener('change', () => {
	const selectedBreedId = breedSelect.value;
	showLoader();
	hideError();

	fetchCatByBreed(selectedBreedId)
		.then(cat => {
			displayCatInfo(cat);
			hideLoader();
		})
		.catch(error => {
			showError();
			hideLoader();
			Notiflix.Notify.failure(error);
		});
});

showLoader();
hideError();

fetchBreeds()
	.then(breeds => {
		populateBreedSelect(breeds);
		hideLoader();
	})
	.catch(error => {
		showError();
		hideLoader();
		Notiflix.Notify.failure(error);
	});
