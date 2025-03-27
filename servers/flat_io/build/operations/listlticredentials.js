import { z } from "zod";
export const toolName = `listlticredentials`;
export const toolDescription = `List LTI 1.x credentials`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/lti/credentials`;
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
