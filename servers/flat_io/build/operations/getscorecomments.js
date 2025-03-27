import { z } from "zod";
export const toolName = `getscorecomments`;
export const toolDescription = `List comments`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/scores/{score}/comments`;
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
export const inputParams = z.object({ "query": z.object({ "type": z.enum(["document", "inline"]).describe("Filter the comments by type").optional(), "sort": z.literal("date").describe("Sort").optional(), "direction": z.enum(["asc", "desc"]).describe("Sort direction").optional() }).optional() }).shape;
