import { z } from "zod";
export const toolName = `createapisecret`;
export const toolDescription = `Create API Secret`;
export const baseUrl = `https://api.nexmo.com`;
export const path = `/accounts/{api_key}/secrets`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "path": z.object({ "api_key": z.string().describe("The API key to manage secrets for") }).optional(), "body": z.object({ "secret": z.string().describe("The new secret must follow these rules:\n\n* minimum 8 characters\n* maximum 25 characters\n* minimum 1 lower case character\n* minimum 1 upper case character\n* minimum 1 digit\n") }).optional() }).shape;
