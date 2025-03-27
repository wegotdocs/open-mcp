import { z } from "zod";
export const toolName = `unarchiveclass`;
export const toolDescription = `Unarchive the class`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes/{class}/archive`;
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
export const inputParams = z.object({}).shape;
