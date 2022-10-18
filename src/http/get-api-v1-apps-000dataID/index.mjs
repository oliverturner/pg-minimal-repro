/**
 * @typedef {import("@architect/functions/types/http").HttpRequest} HttpRequest
 */

import arc from "@architect/functions";

import { validateUuid } from "@architect/shared/utils/validate.mjs";
import { DYNAMO_DB } from "@architect/shared/constants.mjs";
import { omitProps } from "@architect/shared/utils/sanitise.mjs";

/**
 * @param {HttpRequest} request
 * @returns {Promise<{
 *   cors: true;
 *   json: any;
 * }>}
 */
export async function getApp({ pathParameters }) {
	// TODO: handle errors
	const dataID = validateUuid(pathParameters.dataID);
	const { scopeID } = DYNAMO_DB;

	const tables = await arc.tables();
	const appRaw = await tables.data.get({ scopeID, dataID });
	const appData = omitProps(appRaw, ["scopeID", "dataID"]);

	return {
		cors: true,
		json: appData,
	};
}

export const handler = arc.http.async(getApp);
