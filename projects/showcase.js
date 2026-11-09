'use strict';
const language = new URLSearchParams(location.search).get('lang');
if (language === 'tr' || language === 'en') {
	const target = new URL(location.href);
	const canonical = document.querySelector('link[rel="canonical"]');
	const path = canonical ? new URL(canonical.href).pathname.replace(/^\/en\//, '/') : target.pathname.replace(/^\/en\//, '/');
	target.pathname = `${language === 'en' ? '/en' : ''}${path}`;
	target.searchParams.delete('lang');
	if (target.href !== location.href) location.replace(target.href);
}
