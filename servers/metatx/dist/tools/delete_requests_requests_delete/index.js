export { inputParams } from "./schema/root.js";
export const toolName = `delete_requests_requests_delete`;
export const toolDescription = `Delete Requests`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/requests`;
export const method = `delete`;
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
    "body": []
};
export const flatMap = {};
