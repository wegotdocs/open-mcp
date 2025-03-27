import { z } from "zod";
export const toolName = `sendpost`;
export const toolDescription = `SendSMS`;
export const baseUrl = `https://rest-api.d7networks.com/secure`;
export const path = `/send`;
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
export const inputParams = z.object({ "header": z.object({ "Content-Type": z.string(), "Accept": z.string() }).optional(), "body": z.object({ "content": z.string().describe("Message Content"), "from": z.string().describe("Sender ID / Number"), "to": z.number().int().describe("Destination Mobile Number") }).describe("Send SMS Request").optional() }).shape;
