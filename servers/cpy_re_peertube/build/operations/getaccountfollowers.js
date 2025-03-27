import { z } from "zod";
export const toolName = `getaccountfollowers`;
export const toolDescription = `List followers of an account`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/accounts/{name}/followers`;
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
export const inputParams = z.object({ "path": z.object({ "name": z.string().describe("The username or handle of the account") }).optional(), "query": z.object({ "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.literal("createdAt").describe("Sort followers by criteria").optional(), "search": z.string().describe("Plain text search, applied to various parts of the model depending on endpoint").optional() }).optional() }).shape;
