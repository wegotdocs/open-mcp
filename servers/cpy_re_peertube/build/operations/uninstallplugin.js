import { z } from "zod";
export const toolName = `uninstallplugin`;
export const toolDescription = `Uninstall a plugin`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/plugins/uninstall`;
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
export const inputParams = z.object({ "body": z.object({ "npmName": z.string().describe("name of the plugin/theme in its package.json") }).optional() }).shape;
