//форма (инпуты)
const name = document.getElementById('name');
const select = document.getElementById('select');
const country = document.getElementById('country');
const city = document.getElementById('city');
const date = document.getElementById('date');

//форма
const secondList = document.getElementById('secondList');
const submitInfo = document.getElementById('submitInfo');
const sendBtn = document.getElementById('sendBtn');
const addDocument = document.getElementById('addDocument');
const fileUploader = document.getElementById('file');
const imageGrid = document.getElementById('documentInfo');

//слайдер
let images = document.querySelectorAll('.slider img');
let slider = document.querySelector('.slider');
let leftBtn = document.querySelector('.btnLeft');
let rightBtn = document.querySelector('.btnRight');
let points = document.querySelectorAll('.point');
let img = document.querySelectorAll('#img');

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

	if (submitInfo.style.opacity == 0) {
		submitInfo.style.opacity = 1;
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

	if (proverka.inputCity == true && proverka.inputCountry == true) {
		addDocument.style.display = 'flex';
	}
})

//inputDate
date.addEventListener('click', function (event) {
	// if (date.value !== '' ) {
	// 	proverka.inputDate = true;
	// 	date.style.borderColor = "#8E43ED";
	// }

	// console.log(event.taget);
})

// 
// Добавляем блок с информацией о файле
fileUploader.addEventListener('change', (event) => {
	let files = event.target.files;

	if (files == null) {
		console.log(null);
	}

	console.log('files', files);

	for (const file of files) {
		let name = file.name;
		let type = file.type;
		const size = file.size;

		let format = type.split('/').pop().toUpperCase();

		name = name.slice(0, name.indexOf("."));
		const block = document.getElementById('documentInfo');

		let blockInfo = `
			<div class="info" id="info">
				<span class="fileName">${name}</span>
				<span class="fileSize">${format + ' ' + (size / 1024 / 1014).toFixed(3) + ' mb'}</span>
			</div>
			<img src="./img/basket.png" alt="basket" class="basket" id="basket" onclick ="deleteInfo()">
			`
		block.innerHTML = blockInfo;
	}

	const reader = new FileReader();
	const file = files[0];
	console.log(file);
	reader.readAsDataURL(file);

	reader.addEventListener('load', (event) => {
		const img = document.createElement('img');
		imageGrid.prepend(img);
		img.src = event.target.result;
		img.alt = file.name;
	});
});

// Если файл загружен меняем стиль для кнопки
fileUploader.addEventListener('click', function () {
	let docInfo = document.getElementById('documentInfo');
	let sendBtn = document.getElementById('sendBtn');

	if (docInfo.style.display == 'none') {
		docInfo.style.display = 'flex';
	} else {
		docInfo.style.display = 'flex';
	}

	if (docInfo.style.display = 'flex') {
		sendBtn.style.background = "#8e43ed";
	}
});

//удалить файл
function deleteInfo() {
	console.log('delete');
	file = null;

	if (file == null) {
		imageGrid.style.display = 'none';
		sendBtn.style.background = "#DED9E4";
	}
	console.log(file);
}

// sendBtn.addEventListener('click', function () {

// 	if (submitInfo.style.opacity == 0) {
// 		submitInfo.style.opacity = 1;
// 	}

// })

// function opacity() {
// 	if (submitInfo.style.opacity == 0) {
// 		submitInfo.style.opacity == 1;
// 	}
// }


//SLIDER
let current = 0;

function slide() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('hidden');
		points[i].style.backgroundColor = 'inherit';
	}
	images[current].classList.remove('hidden');
	points[current].style.backgroundColor = '#fff';
}
slide();

leftBtn.addEventListener('click', function () {
	if (current - 1 == -1) {
		current = images.length - 1;
	} else {
		current--;
	}
	slide();
})

rightBtn.addEventListener('click', function () {
	if (current + 1 == images.length) {
		current = 0;
	} else {
		current++;
	}
	slide();
});


//поменял картинку для мобильной версии в слайдере
//функция каждую секунду проверяет размер слайдера
let checkImgSize = setInterval(function () {
	if (img[0].width == "349") {
		for (let i = 0; i < img.length; i++) {
			img[i].src = img[i].baseURI + 'img/slideImg.png';
		}
	} else {
		for (let i = 0; i < img.length; i++) {
			img[i].src = `http://localhost:8848/img/${i + 1}.png`
		}
	}
}, 1000);

//валидация формы и отправка
/*
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(event) {
		event.preventDefault();
		let error = formValidate(form);
	}

	function formValidate(form) {
		let error = 0;

		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];

			formRemoveError(input);

			if (input.classList.contains('_name')) {
				if(input.value == '') {
					formAddError(input);
					error++;
				} else if (proverka.inputSelect === "Male" || proverka.inputSelect === "Female") {
					formAddError(input);
					error++;
				}
			}
		};
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}



});*/