export { inputParams } from "./schema/root.js";
export const toolName = `vpcpeerings_create`;
export const toolDescription = `Create a New VPC Peering`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/vpc_peerings`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
