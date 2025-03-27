import { z } from "zod";
export const toolName = `createorganizationinvitation`;
export const toolDescription = `Create a new invitation to join the organization`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/invitations`;
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
export const inputParams = z.object({ "body": z.object({ "email": z.string().describe("The email address you want to send the invitation to").optional(), "organizationRole": z.enum(["admin", "billing", "teacher", "user"]).describe("User's Organization Role (for Edu users only)").optional() }).describe("The parameters to create an organization invitation").optional() }).shape;
