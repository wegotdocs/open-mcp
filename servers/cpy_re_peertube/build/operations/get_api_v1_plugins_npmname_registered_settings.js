import { z } from "zod";
export const toolName = `get_api_v1_plugins_npmname_registered_settings`;
export const toolDescription = `Get a plugin's registered settings`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/plugins/{npmName}/registered-settings`;
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
export const inputParams = z.object({ "path": z.object({ "npmName": z.string().describe("name of the plugin/theme on npmjs.com or in its package.json") }).optional() }).shape;
