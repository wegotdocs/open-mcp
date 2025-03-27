import { z } from "zod";
export const toolName = `getgroupdetails`;
export const toolDescription = `Get group information`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/groups/{group}`;
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
export const inputParams = z.object({}).shape;
