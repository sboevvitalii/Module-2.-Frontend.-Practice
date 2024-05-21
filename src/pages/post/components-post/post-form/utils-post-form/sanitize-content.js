export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp', ' ')
		.replace(/\s+/g, ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
