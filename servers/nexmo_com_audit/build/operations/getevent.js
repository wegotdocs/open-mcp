import { z } from "zod";
export const toolName = `getevent`;
export const toolDescription = `Retrieve individual audit event`;
export const baseUrl = `https://api.nexmo.com/beta/audit`;
export const path = `/events/{id}`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("The UUID of the audit event to retrieve") }).optional() }).shape;
