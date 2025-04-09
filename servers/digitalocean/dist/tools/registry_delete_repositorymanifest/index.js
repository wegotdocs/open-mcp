export { inputParams } from "./schema/root.js";
export const toolName = `registry_delete_repositorymanifest`;
export const toolDescription = `Delete Container Registry Repository Manifest`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}`;
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
        "registry_name",
        "repository_name",
        "manifest_digest"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
