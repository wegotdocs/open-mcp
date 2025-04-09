export { inputParams } from "./schema/root.js";
export const toolName = `vpcpeerings_list`;
export const toolDescription = `List All VPC Peerings`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpc_peerings`;
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
        "per_page",
        "page",
        "region"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
