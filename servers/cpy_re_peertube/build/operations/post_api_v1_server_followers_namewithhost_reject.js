import { z } from "zod";
export const toolName = `post_api_v1_server_followers_namewithhost_reject`;
export const toolDescription = `Reject a pending follower to your server`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/followers/{nameWithHost}/reject`;
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
export const inputParams = z.object({ "path": z.object({ "nameWithHost": z.string().email().describe("The remote actor handle to remove from your followers") }).optional() }).shape;
