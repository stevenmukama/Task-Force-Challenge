document.addEventListener('DOMContentLoaded', () => {
	const gallery = document.getElementById('gallery');

	const images = [
		{ src: 'assets/foxAnimal.png', alt: 'fennec fox', country: 'India' },
		{
			src: 'assets/whaleAnimal.png',
			alt: 'humpback whale',
			country: 'South Africa',
		},
		{
			src: 'assets/baboonAnimal.png',
			alt: 'common brown baboon',
			country: 'South Africa',
		},
		{
			src: 'assets/deerAnimal.png',
			alt: 'spotted deer',
			country: 'Amazon',
		},
	];

	const createImageContainer = ({ src, alt, country }) => {
		const container = document.createElement('div');
		container.className = 'image-container';

		const image = document.createElement('img');
		image.src = src;
		image.alt = alt;

		const textOverlay = document.createElement('div');
		textOverlay.className = 'text-overlay';
		textOverlay.innerHTML = `<div class="animal-description" >${alt}</div><div class="animal-location">${country}</div>`;

		container.appendChild(image);
		container.appendChild(textOverlay);

		return container;
	};

	const imageContainers = images.map(createImageContainer);
	imageContainers.forEach((container) => gallery.appendChild(container));
});
