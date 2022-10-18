/**
 * Reusable handler for OPTIONS requests
 *
 * @param {*} _req
 * @param {*} res
 */
export function handler(_req, res) {
	res({
		headers: {
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
			"Access-Control-Allow-Origin": "*",
		},
		json: { ok: true },
	});
}
