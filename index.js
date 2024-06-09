document.addEventListener('DOMContentLoaded', () => {
	const gallery = document.getElementById('gallery');

	const images = [
		{
			src: 'assets/foxAnimal.png',
			alt: 'fennec<br> fox',
			country: 'India',
		},
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
		textOverlay.innerHTML = `
			<div class="animal-description">${alt}</div>
			<div class="animal-location">${country}</div>
			<div class="know-more">
				Know more
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
				</svg>
			</div>`;

		container.appendChild(image);
		container.appendChild(textOverlay);

		return container;
	};

	const imageContainers = images.map(createImageContainer);
	imageContainers.forEach((container) => gallery.appendChild(container));
});
