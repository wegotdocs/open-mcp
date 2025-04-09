export { inputParams } from "./schema/root.js";
export const toolName = `postissuingpersonalizationdesignspersonalizationdesign`;
export const toolDescription = `Update a personalization design`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/issuing/personalization_designs/{personalization_design}`;
export const method = `post`;
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
    "query": [],
    "header": [],
    "path": [
        "personalization_design"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
