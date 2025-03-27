import { z } from "zod";
export const toolName = `post_api_v1_server_blocklist_servers`;
export const toolDescription = `Block a server`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/blocklist/servers`;
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
export const inputParams = z.object({ "body": z.object({ "host": z.string().describe("server domain to block") }).optional() }).shape;
