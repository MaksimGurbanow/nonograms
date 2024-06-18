export const getClues = (arr) => {
	const clues = [];
	let count = 0;

	arr.forEach(cell => {
		if (cell === 1) {
			count++;
		} else if (count > 0) {
			clues.push(count);
			count = 0;
		}
	});

	if (count > 0) {
		clues.push(count);
	}

	return clues.length > 0 ? clues : [0];
};