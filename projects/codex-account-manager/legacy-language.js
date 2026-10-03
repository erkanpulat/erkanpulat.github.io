'use strict';
// Keep links shared before the two static language pages were introduced working.
const legacyLanguage = new URLSearchParams(location.search).get('lang');
if (legacyLanguage === 'en' || legacyLanguage === 'tr') {
	const target = `${legacyLanguage === 'en' ? '/en' : ''}/projects/quotacrew/`;
	const next = new URL(location.href);
	next.pathname = target;
	next.searchParams.delete('lang');
	if (next.pathname !== location.pathname) location.replace(next.href);
	else history.replaceState(null, '', next.href);
}
