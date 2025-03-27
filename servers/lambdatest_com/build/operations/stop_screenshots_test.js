import { z } from "zod";
export const toolName = `stop_screenshots_test`;
export const toolDescription = `Stop specified screenshot test`;
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`;
export const path = `/stop/{test_id}`;
export const method = `put`;
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
export const inputParams = z.object({ "path": z.object({ "test_id": z.string().describe("Test ID that details you want to stop") }).optional() }).shape;
