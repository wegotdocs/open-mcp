import { z } from "zod";
export const toolName = `redact_message`;
export const toolDescription = `Redact a specific message`;
export const baseUrl = `https://api.nexmo.com/v1/redact`;
export const path = `/transaction`;
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
export const inputParams = z.object({ "body": z.object({ "id": z.string().describe("The transaction ID to redact"), "product": z.enum(["sms", "voice", "number-insight", "verify", "verify-sdk", "messages"]).describe("Product name that the ID provided relates to"), "type": z.enum(["inbound", "outbound"]).describe("Required if redacting SMS data") }).optional() }).shape;
