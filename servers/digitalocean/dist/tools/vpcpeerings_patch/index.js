export { inputParams } from "./schema/root.js";
export const toolName = `vpcpeerings_patch`;
export const toolDescription = `Update a VPC peering`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpc_peerings/{vpc_peering_id}`;
export const method = `patch`;
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
    "query": [],
    "header": [],
    "path": [
        "vpc_peering_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
