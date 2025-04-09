export { inputParams } from "./schema/root.js";
export const toolName = `getvalidprojectname`;
export const toolDescription = `Get valid project name`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/projectvalidate/validProjectName`;
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
export const keys = {
    "query": [
        "name"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
