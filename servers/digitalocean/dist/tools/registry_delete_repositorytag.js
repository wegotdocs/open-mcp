import { z } from "zod";
export const toolName = `registry_delete_repositorytag`;
export const toolDescription = `Delete Container Registry Repository Tag`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}`;
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
        "repository_tag"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "registry_name": z.string().describe("The name of a container registry."), "repository_name": z.string().describe("The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."), "repository_tag": z.string().describe("The name of a container registry repository tag.") }).shape;
