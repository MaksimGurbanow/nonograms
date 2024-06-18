import { Cell } from '../cell/Cell';

export const ColNumbers = (numbers) => {
	return `
    <div 
    class='nonograms__col-numbers'
    >
    <div class='nonograms__col-pairs'>
    ${numbers.map((row) => 
		`<div class='nonograms__clues-col-group'>
        ${row.map((clue) => Cell(0, clue)).join('')}
        </div>`).join('')
}
    </div>
    </div>
    `;
};
