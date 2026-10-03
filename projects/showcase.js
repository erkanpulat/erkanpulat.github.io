'use strict';
const button = document.getElementById('language');
function setLanguage(language) {
	document.documentElement.lang = language;
	document.querySelectorAll('[data-en][data-tr]').forEach((element) => {
		element.textContent = element.dataset[language];
	});
	document.querySelector('.brand').href = language === 'en' ? '/en/' : '/';
	document
		.querySelector('nav')
		.setAttribute('aria-label', language === 'tr' ? 'Proje gezinmesi' : 'Project navigation');
	document.querySelectorAll('.project-switcher a').forEach((anchor) => {
		const url = new URL(anchor.href);
		if (url.pathname.endsWith('/projects/codex-account-manager/') || url.pathname.endsWith('/projects/quotacrew/')) {
			url.pathname = `${language === 'en' ? '/en' : ''}/projects/quotacrew/`;
			url.searchParams.delete('lang');
			anchor.href = url.href;
			return;
		}
		url.searchParams.set('lang', language);
		anchor.href = url.href;
	});
	document.querySelector('.return-orbit a').href =
		(language === 'en' ? '/en/' : '/') + '#bolum-kendi-yildizlarim';
	button.textContent = language === 'en' ? 'TR' : 'EN';
	button.setAttribute('aria-label', language === 'en' ? 'Türkçeye geç' : 'Switch to English');
	try {
		localStorage.setItem('project-showcase-language', language);
	} catch {
		/* Storage may be disabled. */
	}
}
let saved = new URLSearchParams(location.search).get('lang');
try {
	saved ||= localStorage.getItem('project-showcase-language');
} catch {
	/* Use browser language. */
}
setLanguage(
	saved === 'en' || saved === 'tr' ? saved : navigator.language.startsWith('tr') ? 'tr' : 'en',
);
button.addEventListener('click', () => {
	const language = document.documentElement.lang === 'en' ? 'tr' : 'en';
	setLanguage(language);
	const url = new URL(location.href);
	url.searchParams.set('lang', language);
	history.replaceState(null, '', url);
});
