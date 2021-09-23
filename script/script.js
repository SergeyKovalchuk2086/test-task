const fileUploader = document.getElementById('file');

fileUploader.addEventListener('change', (event) => {
	const files = event.target.files;
	console.log('files', files);

	for (const file of files) {
		let name = file.name;
		let type = file.type;
		const size = file.size;


		console.log(name);
		console.log(type);

		let format = type.split('/').pop().toUpperCase();
		console.log(format);

		name = name.slice(0, name.indexOf("."));
		const block = document.getElementById('documentInfo');

		let blockInfo = `
			<div class="info">
				<span class="fileName">${name}</span>
				<span class="fileSize">${format + ' ' + (size / 1024 / 1014).toFixed(3) + ' mb'}</span>
			</div>
			<img src="./img/basket.png" alt="basket" class="basket">
			`
		block.innerHTML = blockInfo;

	}
});

const reader = new FileReader();
const imageGrid = document.getElementById('documentInfo');

fileUploader.addEventListener('change', (event) => {
	const files = event.target.files;
	const file = files[0];
	reader.readAsDataURL(file);

	reader.addEventListener('load', (event) => {
		const img = document.createElement('img');
		imageGrid.prepend(img);
		img.src = event.target.result;
		img.alt = file.name;
	});
});

fileUploader.addEventListener('click', function () {
	let div = document.getElementById('documentInfo');

	if (div.style.display == 'none') {
		div.style.display = 'flex';
	} else {
		div.style.display = 'flex';
	}
});