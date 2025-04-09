export { inputParams } from "./schema/root.js";
export const toolName = `deletelocale`;
export const toolDescription = `Delete locale`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/mypreferences/locale`;
export const method = `delete`;
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
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
