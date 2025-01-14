import { i18n } from '$lib/i18n';
import { page } from '$app/state';
import { goto } from '$app/navigation';

/**
 * @param {import("$lib/paraglide/runtime").AvailableLanguageTag} newLanguage
 */
export function switchToLanguage(newLanguage) {
    const canonicalPath = i18n.route(page.url.pathname);
    const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
    goto(localisedPath);
}
