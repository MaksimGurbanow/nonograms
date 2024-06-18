export const MenuBtn = () => {
	return `
      <div 
          class="nonograms__menu-btn"
          onClick="document.querySelector
          ('.nonograms__modal-menu').classList.toggle('active');"
      >
          <svg
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M1 1H17"
                  stroke="#403F3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
          </svg>
          <svg
              width="18"
              height="2"
              viewBox="0 0 18 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M1 1H17"
                  stroke="#403F3D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
          </svg>
      </div>
  `;
};
