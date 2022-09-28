const btnSearch = document.querySelector('.btn--search');
const inputSearch = document.querySelector('.input--search');
const searchDiv = document.querySelector('.search');

btnSearch.addEventListener('click', () => {
	searchDiv.classList.toggle('active');
	inputSearch.focus();
});
