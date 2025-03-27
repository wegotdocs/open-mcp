import { z } from "zod";
export const toolName = `post_api_v1_abuses_abuseid_messages`;
export const toolDescription = `Add message to an abuse`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/abuses/{abuseId}/messages`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "abuseId": z.number().int().gte(1).describe("Abuse id") }).optional(), "body": z.object({ "message": z.string().min(2).max(3000).describe("Message to send") }).optional() }).shape;
