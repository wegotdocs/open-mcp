import { z } from "zod";
export const toolName = `post_collaboration_whitelist_exempt_targets`;
export const toolDescription = `Create user exemption from collaboration domain restrictions`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/collaboration_whitelist_exempt_targets`;
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
export const inputParams = z.object({ "body": z.object({ "user": z.object({ "id": z.string().describe("The ID of the user to exempt.") }).describe("The user to exempt.") }).optional() }).shape;
