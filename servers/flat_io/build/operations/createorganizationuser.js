import { z } from "zod";
export const toolName = `createorganizationuser`;
export const toolDescription = `Create a new user account`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/organizations/users`;
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
export const inputParams = z.object({ "body": z.object({ "email": z.string().email().describe("Email of the new account").optional(), "firstname": z.string().max(60).describe("First name of the user").optional(), "lastname": z.string().max(60).describe("Last name of the user").optional(), "locale": z.enum(["en", "en-GB", "es", "fr", "de", "it", "ja", "ko", "nl", "pl", "pt", "pt-BR", "ro", "ru", "sv", "tr", "zh-Hans"]).describe("The user language"), "password": z.string().min(6).max(1000).describe("Password of the new account"), "username": z.string().regex(new RegExp("^[A-Za-z0-9\\-_.]+$")).min(1).max(30).describe("Username of the new account") }).describe("User creation").optional() }).shape;
