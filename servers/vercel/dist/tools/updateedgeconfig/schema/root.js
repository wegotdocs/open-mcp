import { z } from "zod";
export const inputParams = {
    "edgeConfigId": z.string(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "b_slug": z.string().regex(new RegExp("^[\\\\w-]+$")).max(64)
};
