import { z } from "zod";
export const toolName = `post_api_v1_server_following`;
export const toolDescription = `Follow a list of actors (PeerTube instance, channel or account)`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/following`;
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
export const inputParams = z.object({ "body": z.object({ "handles": z.array(z.string()).optional(), "hosts": z.array(z.string()).optional() }).optional() }).shape;
