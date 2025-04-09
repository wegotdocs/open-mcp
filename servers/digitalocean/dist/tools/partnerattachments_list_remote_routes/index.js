export { inputParams } from "./schema/root.js";
export const toolName = `partnerattachments_list_remote_routes`;
export const toolDescription = `List remote routes for a partner attachment`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/partner_network_connect/attachments/{pa_id}/remote_routes`;
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
        "page"
    ],
    "header": [],
    "path": [
        "pa_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
