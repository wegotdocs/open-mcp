import { z } from "zod";
export const toolName = `addonpropertiesresource_putaddonproperty_put`;
export const toolDescription = `Set app property`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}`;
export const method = `put`;
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
export const inputParams = {
    "addonKey": z.string().describe("The key of the app, as defined in its descriptor."),
    "propertyKey": z.string().describe("The key of the property.")
};
