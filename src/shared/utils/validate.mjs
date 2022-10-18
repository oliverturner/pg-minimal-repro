const regExps = {
	uuid: new RegExp(/^[a-zA-Z0-9-]{36}$/),
};

/**
 * @param {string} str
 * @returns {string}
 */
export function validateUuid(str) {
	const uuid = str.match(regExps.uuid) ? str : false;

	if (uuid === false) {
		throw new Error("Invalid dataID");
	}

	return uuid;
}
