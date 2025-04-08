import { z } from "zod";
export const toolName = `registry_list_garbagecollections`;
export const toolDescription = `List Garbage Collections`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/registry/{registry_name}/garbage-collections`;
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
        "registry_name"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "registry_name": z.string().describe("The name of a container registry."),
    "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
    "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
};
