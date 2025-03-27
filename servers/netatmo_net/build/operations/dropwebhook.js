import { z } from "zod";
export const toolName = `dropwebhook`;
export const toolDescription = `Dissociates a webhook from a user.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/dropwebhook`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "app_type": z.string().describe("For Welcome, use app_camera") }).optional() }).shape;
