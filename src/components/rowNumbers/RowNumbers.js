import { Cell } from '../cell/Cell';

export const rowNumbers = (numbers) => {
	return `
    <div 
    class='nonograms__row-numbers'
    >
    <div class='nonograms__row-pairs'>
    ${numbers.map((row) => 
		`<div class='nonograms__clues-row-group'>
        ${row.map((clue) => Cell(0, clue)).join('')}
        </div>`).join('')
}
    </div>
    </div>
    `
	;
};
