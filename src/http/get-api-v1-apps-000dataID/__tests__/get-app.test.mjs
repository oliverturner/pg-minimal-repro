import test from "tape";
import { sandboxEnd, sandboxStart } from "../../../../testing/helpers.mjs";

import { getApp } from "../index.mjs";

sandboxStart();

test("Returns sanitised data", async (t) => {
	t.plan(1);

	const dataID = "ec6fe5a1-5ebf-4d1a-ae01-ff506f9d5dc5";
	const expectedKeys = ["label", "page", "slots"];

	// @ts-ignore
	const { json } = await getApp({ pathParameters: { dataID } });
	const actualKeys = Array.from(Object.keys(json));

	t.deepEqual(actualKeys, expectedKeys, "Keys are removed");
});

sandboxEnd();
