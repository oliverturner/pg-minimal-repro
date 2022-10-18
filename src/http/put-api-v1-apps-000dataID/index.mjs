/**
 * @typedef {import("@architect/functions/types/http").HttpRequest} HttpRequest
 */

import arc from "@architect/functions";

import { validateUuid } from "@architect/shared/utils/validate.mjs";
import { DYNAMO_DB } from "@architect/shared/constants.mjs";

/**
 * @param {HttpRequest} request
 * @returns {Promise<{
 *   cors: true;
 *   json: any;
 * }>}
 */
export async function updateApp(request) {
	const dataID = validateUuid(request.pathParameters.dataID);
	// TODO: validate request.body & test that violations are handled
	// TODO: prevent upsert: require pre-existing dataID
	const payload = JSON.parse(request.body);
	const { scopeID } = DYNAMO_DB;

	const tables = await arc.tables();
	const json = await tables.data.put({ scopeID, dataID, ...payload });

	return {
		cors: true,
		json,
	};
}

export const handler = arc.http.async(updateApp);
