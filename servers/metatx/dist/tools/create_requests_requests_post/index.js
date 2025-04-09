export { inputParams } from "./schema/root.js";
export const toolName = `create_requests_requests_post`;
export const toolDescription = `Create Requests`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/requests`;
export const method = `post`;
export const security = [
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
    "path": [],
    "cookie": [],
    "body": [
        "contract_id",
        "contract_address",
        "specifications",
        "ttl_days",
        "live_at"
    ]
};
export const flatMap = {};
