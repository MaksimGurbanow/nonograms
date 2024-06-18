export const isEqual = (original, copy) => {
	for (let i = 0; i < original.length; i++) {
		for (let j = 0; j < original[i].length; j++) {
			if (original[i][j] !== copy[i][j]) {
				return false;
			}
		}
	}

	return true;
};
