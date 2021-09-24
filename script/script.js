const fileUploader = document.getElementById('file');
const reader = new FileReader();
const imageGrid = document.getElementById('documentInfo');

const name = document.getElementById('name');
const select = document.getElementById('select');
const country = document.getElementById('country');
const city = document.getElementById('city');
const date = document.getElementById('date');
console.log(date);

const secondList = document.getElementById('secondList');


let proverka = {
	inputName: false,
	inputSelect: '',
	inputCountry: false,
	inputCity: false,
}

//inputName
name.addEventListener('keyup', function (event) {
	if (event.target.value.length >= 1) {
		proverka.inputName = true;
		name.style.borderColor = "#8E43ED";
	}
})

//inputSelect
select.addEventListener('change', function (event) {
	if (event.target.value == "Male") {
		proverka.inputSelect = "Male";
		select.style.color = "black";
	} else if (event.target.value == "Female") {
		proverka.inputSelect = "Female";
		select.style.color = "black";
	}
	select.style.borderColor = "#8E43ED";

	console.log(proverka);
	if ((proverka.inputName == true) && (proverka.inputSelect == "Male" || proverka.inputSelect == "Female")) {
		secondList.style.display = 'block';
	}
})


//inputCountry
country.addEventListener('keyup', function (event) {
	if (event.target.value.length >= 1) {
		proverka.inputCountry = true;
		country.style.borderColor = "#8E43ED";
	}
})


//inputCity
city.addEventListener('keyup', function (event) {
	if (event.target.value.length >= 1) {
		proverka.inputCity = true;
		city.style.borderColor = "#8E43ED";
	}
})

//inputDate
date.addEventListener('click', function (event) {
	// if (date.value !== '' ) {
	// 	proverka.inputDate = true;
	// 	date.style.borderColor = "#8E43ED";
	// }

	console.log(event.taget);
})

//добавляем блок с информацией о файле
// fileUploader.addEventListener('change', (event) => {
// 	const files = event.target.files;
// 	console.log('files', files);

// 	for (const file of files) {
// 		let name = file.name;
// 		let type = file.type;
// 		const size = file.size;

// 		let format = type.split('/').pop().toUpperCase();
// 		console.log(format);

// 		name = name.slice(0, name.indexOf("."));
// 		const block = document.getElementById('documentInfo');

// 		let blockInfo = `
// 			<div class="info" id="info">
// 				<span class="fileName">${name}</span>
// 				<span class="fileSize">${format + ' ' + (size / 1024 / 1014).toFixed(3) + ' mb'}</span>
// 			</div>
// 			<img src="./img/basket.png" alt="basket" class="basket" id="basket">
// 			`
// 		block.innerHTML = blockInfo;
// 	}

// 	const file = files[0];
// 	reader.readAsDataURL(file);

// 	reader.addEventListener('load', (event) => {
// 		const img = document.createElement('img');
// 		imageGrid.prepend(img);
// 		img.src = event.target.result;
// 		img.alt = file.name;
// 	});
// });

//если файл загружен меняем стиль для кнопки
// fileUploader.addEventListener('click', function () {
// 	let div = document.getElementById('documentInfo');
// 	let sendBtn = document.getElementById('sendBtn');

// 	if (div.style.display == 'none') {
// 		div.style.display = 'flex';
// 	} else {
// 		div.style.display = 'flex';
// 	}

// 	if (div.style.display = 'flex') {
// 		sendBtn.style.background = "#8e43ed";
// 	}
// });

