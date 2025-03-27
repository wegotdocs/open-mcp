import { z } from "zod";
export const toolName = `updateorganizationuser`;
export const toolDescription = `Update account information`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/users/{user}`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "email": z.string().email().describe("Email of the account").optional(), "firstname": z.string().max(60).describe("First name of the user").optional(), "lastname": z.string().max(60).describe("Last name of the user").optional(), "organizationRole": z.enum(["admin", "billing", "teacher", "user"]).describe("User's Organization Role (for Edu users only)").optional(), "password": z.string().min(6).max(1000).describe("Password of the account").optional(), "username": z.string().regex(new RegExp("^[A-Za-z0-9\\-_.]+$")).min(1).max(30).describe("Username of the account").optional() }).describe("User update as an organization admin").optional() }).shape;
