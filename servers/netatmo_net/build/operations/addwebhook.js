import { z } from "zod";
export const toolName = `addwebhook`;
export const toolDescription = `Links a callback url to a user.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/addwebhook`;
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
export const inputParams = z.object({ "query": z.object({ "url": z.string().describe("Your webhook callback url"), "app_type": z.string().describe("Webhooks are only available for Welcome, enter app_camera.") }).optional() }).shape;
