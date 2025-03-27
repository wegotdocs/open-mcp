import { z } from "zod";
export const toolName = `get_session`;
export const toolDescription = `Returns member id of user logged`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/session`;
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
