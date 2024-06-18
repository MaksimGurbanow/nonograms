export const Timer = (seconds, minutes) => {
	return `
        <div class="nonograms__timer">
        ${minutes.toString().padStart(2, '0')}
        : ${seconds.toString().padStart(2, '0')}
        </div>
    `;
};
