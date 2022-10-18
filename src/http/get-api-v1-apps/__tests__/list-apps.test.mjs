import test from "tape";
import { sandboxEnd, sandboxStart } from "../../../../testing/helpers.mjs";

import { getApps } from "../index.mjs";

sandboxStart();

test("db", async (t) => {
	t.plan(1);
	const data = await getApps();
	const expected = {
		cors: true,
		json: [
			{
				label: "dotcom-stream",
				dataID: "069c8572-2282-4711-b8e5-f18424193651",
			},
			{
				label: "dotcom-article",
				dataID: "aa8dce25-ee59-4b5b-8f6f-ceecba8b226b",
			},
			{
				label: "dotcom-home",
				dataID: "ec6fe5a1-5ebf-4d1a-ae01-ff506f9d5dc5",
			},
		],
	};
	t.deepEquals(data, expected, "Response matches fixtures");
});

sandboxEnd();
