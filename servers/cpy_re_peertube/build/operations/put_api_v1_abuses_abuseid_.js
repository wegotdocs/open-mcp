import { z } from "zod";
export const toolName = `put_api_v1_abuses_abuseid_`;
export const toolDescription = `Update an abuse`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/abuses/{abuseId}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "abuseId": z.number().int().gte(1).describe("Abuse id") }).optional(), "body": z.object({ "moderationComment": z.string().min(2).max(3000).describe("Update the report comment visible only to the moderation team").optional(), "state": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The abuse state (Pending = `1`, Rejected = `2`, Accepted = `3`)").optional() }).optional() }).shape;
