export const Cell = (value, children='', x, y) => {
	return `
      <div 
      class='nonograms__cell${value === 1 ? ' filled' : ''}'
      x='${x}'
      y='${y}'
      >${children}
      </div>
  `;
};
