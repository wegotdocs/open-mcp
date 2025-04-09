export { inputParams } from "./schema/root.js";
export const toolName = `checkdomainprice`;
export const toolDescription = `Check the price for a domain`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v4/domains/price`;
export const method = `get`;
export const security = [
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
        "name",
        "type",
        "teamId",
        "slug"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
