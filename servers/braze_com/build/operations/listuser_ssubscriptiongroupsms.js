import { z } from "zod";
export const toolName = `listuser_ssubscriptiongroupsms`;
export const toolDescription = `List User's Subscription Group - SMS`;
export const baseUrl = `https://rest.iad-01.braze.com`;
export const path = `/subscription/user/status`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "external_id": z.string().describe("(Required*) String\n\nThe external_id of the user. Must include at least one and at most 50 `external_ids`.").optional(), "limit": z.string().describe("(Optional) Integer\n\nThe limit on the maximum number of results returned. Default (and max) limit is 100.").optional(), "offset": z.string().describe("(Optional) Integer\n\nNumber of templates to skip before returning rest of the templates that fit the search criteria.").optional(), "phone": z.string().describe("(Required*) String\n\nThe phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.\n").optional() }).optional() }).shape;
