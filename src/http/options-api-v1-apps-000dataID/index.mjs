import arc from "@architect/functions";

import * as options from "@architect/shared/http/options.mjs";

export const handler = arc.http(options.handler);
