import { z } from "zod";
export const toolName = `options_events`;
export const toolDescription = `Get events long poll endpoint`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/events`;
export const method = `options`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({}).shape;
