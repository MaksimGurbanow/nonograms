import { getClues } from '../../utils/getClues';
import { ColNumbers } from '../colNumbers/ColNumbers';
import { Field } from '../field/Field';
import { rowNumbers } from '../rowNumbers/rowNumbers';

export const Board = (template) => {
	const numberOfRows = template.length;
	const numberOfColumns = numberOfRows > 0 ? template[0].length : 0;

	const rowClues = template.map((row) => getClues(row));
	const colClues = Array.from({ length: numberOfColumns }, (_, colIndex) =>
		getClues(template.map((row) => row[colIndex])),
	);
	return `
        <div class='nonograms__board'>
            <div class='nonograms__grid'>
                ${rowNumbers(rowClues)}
                <div class='nonograms__grid-inner'>
                    ${ColNumbers(colClues)}
                    ${Field(template)}
                </div>
            </div>
        </div>
    `;
};
