import arc from "@architect/functions";

/**
 * @returns { Promise<{ cors: true; json: any[]; }>}
 */
export async function getApps() {
	// TODO: support a `slots` query string: return slots as a dict (by default) or as an array if `slots=list`
	const { data } = await arc.tables();
	const { Items } = await data.scan({
		AttributesToGet: ["label", "dataID"],
	});

	return {
		cors: true,
		json: Items,
	};
}

export const handler = arc.http.async(getApps);
