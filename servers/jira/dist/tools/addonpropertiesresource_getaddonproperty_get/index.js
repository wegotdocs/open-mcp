export { inputParams } from "./schema/root.js";
export const toolName = `addonpropertiesresource_getaddonproperty_get`;
export const toolDescription = `Get app property`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}`;
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
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "addonKey",
        "propertyKey"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
