import { z } from "zod";
export const toolName = `getfieldautocompleteforquerystring`;
export const toolDescription = `Get field auto complete suggestions`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/jql/autocompletedata/suggestions`;
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
    "query": [
        "fieldName",
        "fieldValue",
        "predicateName",
        "predicateValue"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "fieldName": z.string().describe("The name of the field.").optional(), "fieldValue": z.string().describe("The partial field item name entered by the user.").optional(), "predicateName": z.string().describe("The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.").optional(), "predicateValue": z.string().describe("The partial predicate item name entered by the user.").optional() }).shape;
