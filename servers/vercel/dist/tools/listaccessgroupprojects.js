import { z } from "zod";
export const toolName = `listaccessgroupprojects`;
export const toolDescription = `List projects of an access group`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/access-groups/{idOrName}/projects`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "limit",
        "next",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [
        "idOrName"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "idOrName": z.string().describe("The ID or name of the Access Group."), "limit": z.number().int().gte(1).lte(100).describe("Limit how many access group projects should be returned.").optional(), "next": z.string().describe("Continuation cursor to retrieve the next page of results.").optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional() }).shape;
