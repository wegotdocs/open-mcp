export { inputParams } from "./schema/root.js";
export const toolName = `domains_delete_record`;
export const toolDescription = `Delete a Domain Record`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/domains/{domain_name}/records/{domain_record_id}`;
export const method = `delete`;
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
        "domain_name",
        "domain_record_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
