import test from "tape";
import { sandboxEnd, sandboxStart } from "../../../../testing/helpers.mjs";
import homeFixture from "../../../../__fixtures__/dotcom-home.json" assert { type: "json" };

import { updateApp } from "../index.mjs";

sandboxStart();

test("Update app config", async (t) => {
	const updatedBody = {
		...homeFixture,
		page: {
			lazyLoad: {
				fetchMarginPercent: 0,
				renderMarginPercent: 0,
				mobileScaling: 0,
			},
			requestMode: "lazy",
		},
	};

	t.plan(1);

	const request = {
		pathParameters: { dataID: homeFixture.dataID },
		body: JSON.stringify(updatedBody),
	};

	// @ts-ignore
	const { json } = await updateApp(request);
	t.deepEquals(json, updatedBody, "data persisted");
});

sandboxEnd();
