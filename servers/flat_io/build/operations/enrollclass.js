import { z } from "zod";
export const toolName = `enrollclass`;
export const toolDescription = `Join a class`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes/enroll/{enrollmentCode}`;
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
export const inputParams = z.object({}).shape;
