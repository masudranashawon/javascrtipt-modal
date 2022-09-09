const btnSec = document.querySelectorAll('.btn');
const modalSection = document.querySelector('.modal-section');
const overlay = document.querySelector('.overlay');
const closeSpan = document.querySelector('.modal-section span');

function showModalItem(show) {
	show.style.transform = 'scale(1)';
	show.style.opacity = '1';
}
function hideModalItem(hide) {
	hide.style.transform = 'scale(0)';
	hide.style.opacity = '0';
}
for (let i = 0; i < btnSec.length; i++) {
	btnSec[i].addEventListener('click', function () {
		showModalItem(modalSection);
		showModalItem(overlay);
	});
}
closeSpan.addEventListener('click', function () {
	hideModalItem(modalSection);
	hideModalItem(overlay);
});
overlay.addEventListener('click', function () {
	hideModalItem(modalSection);
	hideModalItem(overlay);
});
