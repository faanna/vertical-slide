const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll('li');
const panel_li_arr = Array.from(panel_li);
let len = panel_li_arr.length;
const btnUp = document.querySelector('.btnUp');
const btnDown = document.querySelector('.btnDown');

panel_li.forEach((el) => {
	splitTxt(el.querySelector('h2'));
});

function splitTxt(el) {
	const txt = el.textContent;
	const fragment = document.createDocumentFragment();
	let num = 0;
	for (let el of txt) {
		let span = document.createElement('span');
		span.style.transitionDelay = `${0.1 * num++}s`;
		span.textContent = el;
		fragment.appendChild(span);
	}
	el.innerHTML = '';
	el.appendChild(fragment);
}

btnUp.addEventListener('click', moveUp);
function moveUp() {
	const current_item = panel.querySelector('.on');
	const current_index = panel_li_arr.indexOf(current_item);
	let next_index = null;
	if (current_index !== len - 1) {
		next_index = current_index + 1;
	} else {
		next_index = 0;
	}
	current_item.classList.remove('on');
	current_item.classList.add('up');

	panel_li[next_index].classList.add('down');
	setTimeout(() => {
		panel_li[next_index].classList.remove('down');
		panel_li[next_index].classList.add('on');
		panel.querySelector('.up').classList.remove('up');
	}, 1000);
}

btnDown.addEventListener('click', moveDown);
function moveDown() {
	const current_item = panel.querySelector('.on');
	const current_index = panel_li_arr.indexOf(current_item);
	let prev_index = null;
	if (current_index !== 0) {
		prev_index = current_index - 1;
	} else {
		prev_index = len - 1;
	}
	current_item.classList.remove('on');
	current_item.classList.add('down');
	panel_li[prev_index].classList.add('up');

	setTimeout(() => {
		panel_li[prev_index].classList.remove('up');
		panel_li[prev_index].classList.add('on');
		panel.querySelector('.down').classList.remove('down');
	}, 1000);
}
