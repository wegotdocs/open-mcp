export { inputParams } from "./schema/root.js";
export const toolName = `getreportingreportrunsreportrun`;
export const toolDescription = `Retrieve a Report Run`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/reporting/report_runs/{report_run}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "expand"
    ],
    "header": [],
    "path": [
        "report_run"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
