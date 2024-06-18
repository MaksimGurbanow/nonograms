import { App } from './App';
import './scss/styles.scss';
import { changeTemplate } from './utils/changeTemplate';
import { createMatrix } from './utils/createMatrix';
import { isEqual } from './utils/isEqual';
import { pickRandomProperty } from './utils/pickRandomProperty';
import { resetTimer } from './utils/resetTimer';
import { templates } from './utils/templates';

let timer = false;
let isDark = JSON.parse(localStorage.getItem('isDark')) || false;
let soundOff = false;

let seconds = 0;
let minutes = 0;
const clickSound = new Audio('./audios/click-sound.wav');
const winSound = new Audio('./audios/win.wav');
const rightclickSound = new Audio('./audios/right-click.mp3');


const playSoundEffect = (sound) => {
	if (!soundOff) {
		sound.play();
	}
};

const updateTime = () => {
	seconds++;
	if (seconds === 60) {
		seconds = 0;
		minutes++;
		if (minutes === 60) {
			minutes = 0;
		}
	}

	return `
        <div class="nonograms__timer">
            ${minutes.toString().padStart(2, '0')} :
			${seconds.toString().padStart(2, '0')}
        </div>
    `;
};


const handleTemplateClick = (event) => {
	const template = event.target;
	const [level, name] =
		changeTemplate(
			template.getAttribute('level'),
			template.getAttribute('value')
		);
	clearInterval(timer);
	({ seconds, minutes } =
		resetTimer());
	render(templates, level, name, false);
	timer = 0;
};

const render = (templates, currentLevel = 'easy', currentTemplate, isWin) => {
	let emptyMatrix = createMatrix(
		templates[currentLevel][currentTemplate].length
	);

	
	const spentTime = seconds + minutes * 60;
	const mainContent = App(templates[currentLevel],
		currentTemplate, isWin, spentTime);

	const mainElement = document.getElementById('main');
	if (mainElement) {
		mainElement.innerHTML = mainContent;
	} else {
		document.body.innerHTML = `<div id="main">${mainContent}</div>`;
	}

	if (isDark) {
		document.body.classList.add('dark');
	}

	const templateElements = document.querySelectorAll('.nonograms__template');
	templateElements?.forEach((template) => {
		template?.addEventListener('click', handleTemplateClick);
	});

	const field = document.querySelector('.nonograms__field');

	field.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		const target = e.target.closest('.nonograms__cell');
		if (target) {
			target.classList.toggle('crossed');
			target.classList.remove('checked');
			playSoundEffect(rightclickSound);
			if (!timer) {
				timer = setInterval(() => {
					document.querySelector('.nonograms__timer').innerHTML =
						updateTime();
				}, 1000);
			}
		}

	});

	field.addEventListener('click', (e) => {
		const target = e.target.closest('.nonograms__cell');
		if (target) {
			target.classList.toggle('checked');
			target.classList.remove('crossed');
			playSoundEffect(clickSound);

			if (!timer) {
				timer = setInterval(() => {
					document.querySelector('.nonograms__timer').innerHTML =
						updateTime();
				}, 1000);
			}

			const [x, y] = [target.getAttribute('x'),
				target.getAttribute('y')];

			emptyMatrix[x][y] = 
					target.classList.contains('checked') ? 1 : 0;
			if (isEqual(templates[currentLevel][currentTemplate],
				emptyMatrix)) {
				clearInterval(timer);
				timer = false;
				playSoundEffect(winSound);
				render(templates, currentLevel, currentTemplate, true);
			}
		}

	});

	document.querySelector('.nonograms__winner-modal .button')?.
		addEventListener('click', () => {
			({ seconds, minutes } = resetTimer());
			render(templates, currentLevel, currentTemplate, false);
		});

	document.querySelector('.nonograms__reset').
		addEventListener('click', () => {
			clearInterval(timer);
			({ seconds, minutes } =
				resetTimer());
			render(templates, currentLevel, currentTemplate, false);
			timer = false;
		});

	document.querySelector('.nonograms__save').
		addEventListener('click', () => {
			const timeJSON = JSON.stringify([seconds, minutes]);
			const matrixJSON = JSON.stringify(emptyMatrix);
			localStorage.setItem('level', currentLevel);
			localStorage.setItem('template', currentTemplate);
			localStorage.setItem('matrixData', matrixJSON);
			localStorage.setItem('spentTime', timeJSON);
			localStorage.setItem('isDark', isDark);
		});

	document.querySelector('.nonograms__last').addEventListener('click', () => {
		const level = localStorage.getItem('level');
		const template = localStorage.getItem('template');
		const matrixData = localStorage.getItem('matrixData');
		clearInterval(timer);
		({ seconds, minutes } = resetTimer());
		[seconds, minutes] = JSON.parse(localStorage.getItem('spentTime'));
		render(templates, level, template, false);
		timer = false;
		emptyMatrix = JSON.parse(matrixData);
		document.querySelector('.nonograms__timer').innerHTML =
							updateTime();
		
		const len = emptyMatrix.length || 0;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (emptyMatrix[i][j] === 1) {
					const index = i * len + j;
					const childElement = 
						document.querySelectorAll(
							'.nonograms__field  .nonograms__cell'
						)[index];
					childElement.classList.add('checked');
				}
			}
		}
	});
	

	document.querySelector('.nonograms__random').
		addEventListener('click', ()=> {
			currentLevel = pickRandomProperty(templates);
			currentTemplate = 
			pickRandomProperty(templates[currentLevel]);
			clearInterval(timer);
			({ seconds, minutes } =
				resetTimer());
			timer = false;
			render(templates, currentLevel, currentTemplate, false);
		});

	document.querySelector('.nonograms__solution').
		addEventListener('click', () => {
			Array.from(field.children)
				.forEach((cell) => cell.classList.remove('checked'));
			Array.from(field.children).
				forEach((cell) => cell.classList.remove('crossed'));
			const tempMat = templates[currentLevel][currentTemplate];
			tempMat
				.forEach((row, rowI) => {
					row.forEach((elem, index) => {
						if (elem === 1) {
							emptyMatrix[rowI][index] = elem;
							field.
								children[
									rowI * tempMat.length
									+
									index].
								classList.add('checked');

						}
					});
				});
		});

	document.querySelector('.nonograms__theme').
		addEventListener('click', () => {
			isDark = !isDark;
			localStorage.setItem('isDark', isDark);
		}
		);
	
	document.querySelector('.nonograms__toggle-sound').
		addEventListener('click', () => {
			soundOff = !soundOff;
		});
};

const initGame = () => {
	let currentTemplate = pickRandomProperty(templates['easy']);
	render(templates, 'easy', currentTemplate, false);
};

initGame();
