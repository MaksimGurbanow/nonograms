export const pickRandomProperty = (obj) => {
	var prop, len = 0, randomPos, pos = 0;
	for (prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			len += 1;
		}
	}
	randomPos = Math.floor(Math.random() * len);
	for (prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			if (pos === randomPos) {
				return prop;
			}
			pos += 1;
		}
	}       
};
