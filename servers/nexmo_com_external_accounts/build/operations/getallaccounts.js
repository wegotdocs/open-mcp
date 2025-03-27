import { z } from "zod";
export const toolName = `getallaccounts`;
export const toolDescription = `Retrieve all accounts you own`;
export const baseUrl = `https://api.nexmo.com/beta/chatapp-accounts`;
export const path = `/`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    },
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "query": z.object({ "provider": z.enum(["messenger", "viber_service_msg", "whatsapp"]).describe("Filter by provider").optional(), "page_number": z.number().int().describe("Page number of the results"), "page_size": z.number().int().describe("Page size of the results") }).optional() }).shape;
