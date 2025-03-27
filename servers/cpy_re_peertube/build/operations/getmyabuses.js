import { z } from "zod";
export const toolName = `getmyabuses`;
export const toolDescription = `List my abuses`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/abuses`;
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
export const inputParams = z.object({ "query": z.object({ "id": z.number().int().describe("only list the report with this id").optional(), "state": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)").optional(), "sort": z.enum(["-id", "-createdAt", "-state"]).describe("Sort abuses by criteria").optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return") }).optional() }).shape;
