import { z } from "zod";
export const toolName = `put_api_v1_plugins_npmname_settings`;
export const toolDescription = `Set a plugin's settings`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/plugins/{npmName}/settings`;
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
export const inputParams = z.object({ "path": z.object({ "npmName": z.string().describe("name of the plugin/theme on npmjs.com or in its package.json") }).optional(), "body": z.object({ "settings": z.record(z.any()).optional() }).optional() }).shape;
