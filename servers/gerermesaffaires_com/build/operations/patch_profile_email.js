import { z } from "zod";
export const toolName = `patch_profile_email`;
export const toolDescription = `modify email of profile`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/profile/email`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "Email": z.string().optional() }).optional() }).shape;
