export function createMatrix(n) {
	return Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
}