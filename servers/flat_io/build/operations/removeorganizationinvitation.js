import { z } from "zod";
export const toolName = `removeorganizationinvitation`;
export const toolDescription = `Remove an organization invitation`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/invitations/{invitation}`;
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
