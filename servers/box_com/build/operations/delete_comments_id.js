import { z } from "zod";
export const toolName = `delete_comments_id`;
export const toolDescription = `Remove comment`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/comments/{comment_id}`;
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
export const inputParams = z.object({ "path": z.object({ "comment_id": z.string().describe("The ID of the comment.") }).optional() }).shape;
