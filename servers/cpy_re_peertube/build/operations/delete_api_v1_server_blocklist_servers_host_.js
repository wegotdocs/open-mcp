import { z } from "zod";
export const toolName = `delete_api_v1_server_blocklist_servers_host_`;
export const toolDescription = `Unblock a server by its domain`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/blocklist/servers/{host}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "host": z.string().describe("server domain to unblock") }).optional() }).shape;
