export const Template = (templateName, level) => {
	return `
        <div class='nonograms__template'
        level='${level}'
        value='${templateName}'
        >
            ${templateName}
        </div>
    `;
};
