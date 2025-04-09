export { inputParams } from "./schema/root.js";
export const toolName = `partnerattachments_create`;
export const toolDescription = `Create a new partner attachment`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/partner_network_connect/attachments`;
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
    "body": [
        "name",
        "connection_bandwidth_in_mbps",
        "region",
        "naas_provider",
        "vpc_ids",
        "parent_uuid",
        "bgp"
    ]
};
export const flatMap = {};
