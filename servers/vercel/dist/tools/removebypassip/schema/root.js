import { z } from "zod";
export const inputParams = {
    "projectId": z.string(),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "domain": z.string().regex(new RegExp("([a-z]+[a-z.]+)$")).max(2544).optional(),
    "projectScope": z.boolean().optional(),
    "sourceIp": z.string().optional(),
    "allSources": z.boolean().optional(),
    "note": z.string().max(500).optional()
};
