import { derived, writable } from 'svelte/store';
import translations from '$lib/translations';

export const locale = writable<string>('Ru');
export const locales: string[] = Object.keys(translations);

type Translations = {
	[key: string]: {
		[key: string]: string;
	};
};

type Vars = {
	[key: string]: string;
};

function translate(locale: string, key: string, vars: Vars): string {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	let text = (translations as Translations)[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale: string) =>
		(key: string, vars: Vars = {}): string =>
			translate($locale, key, vars)
);
