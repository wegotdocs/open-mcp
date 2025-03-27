import { z } from "zod";
export const toolName = `verifysecuritycode`;
export const toolDescription = `Verify Security Code`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/verify-security-code`;
export const method = `get`;
export const security = [
    {
        "key": "api-key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api-key"
    },
    {
        "key": "user-id",
        "value": "<mcp-env-var>USER_ID</mcp-env-var>",
        "in": "header",
        "envVarName": "USER_ID",
        "schemeType": "apiKey",
        "schemeName": "user-id"
    }
];
export const inputParams = z.object({ "query": z.object({ "security-code": z.string().describe("The security code to verify"), "limit-by": z.string().describe("If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts").optional() }).optional() }).shape;
