/**
 * Return a copy of `obj` omitting any properties included in `keysToOmit`
 *
 * @param {Record<string, never>} obj
 * @param {string[]} keysToOmit
 * @returns
 */
export function omitProps(obj, keysToOmit) {
	const cleaned = {};
	for (const [key, value] of Object.entries(obj)) {
		if (keysToOmit.includes(key)) {
			continue;
		}

		cleaned[key] = value;
	}

	return cleaned;
}
