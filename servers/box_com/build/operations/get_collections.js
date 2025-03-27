import { z } from "zod";
export const toolName = `get_collections`;
export const toolDescription = `List all collections`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/collections`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional(), "offset": z.number().int().describe("The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response."), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional() }).optional() }).shape;
