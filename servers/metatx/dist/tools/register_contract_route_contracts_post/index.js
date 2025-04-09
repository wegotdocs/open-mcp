export { inputParams } from "./schema/root.js";
export const toolName = `register_contract_route_contracts_post`;
export const toolDescription = `Register Contract Route`;
export const baseUrl = `https://engineapi.moonstream.to/metatx`;
export const path = `/contracts`;
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
        "blockchain",
        "address",
        "title",
        "description",
        "image_uri"
    ]
};
export const flatMap = {};
