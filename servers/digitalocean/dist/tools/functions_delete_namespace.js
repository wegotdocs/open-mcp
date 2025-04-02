import { z } from "zod";
export const toolName = `functions_delete_namespace`;
export const toolDescription = `Delete Namespace`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/functions/namespaces/{namespace_id}`;
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
        "namespace_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "namespace_id": z.string().describe("The ID of the namespace to be managed.") }).shape;
