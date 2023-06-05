// cat-api.js

// Función para hacer una petición HTTP a la colección de razas
const apiKey =
	'live_6xQUElFdFTDJFzptsVrEfgwlEfCFOu0dcC3VKzRePi1XDOiI9r62RJ6LiRGtC5sW';

export function fetchBreeds() {
	const url = 'https://api.thecatapi.com/v1/breeds';
	return fetch(url, {
		headers: {
			'x-api-key': apiKey,
		},
	})
		.then(response => response.json())
		.then(data => data)
		.catch(error => {
			throw error;
		});
}

export function fetchCatByBreed(breedId) {
	const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${apiKey}`;
	return fetch(url)
		.then(response => response.json())
		.then(data => data)
		.catch(error => {
			throw error;
		});
}
