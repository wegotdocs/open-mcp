import { z } from "zod";
export const toolName = `functions_get_trigger`;
export const toolDescription = `Get Trigger`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}`;
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
    "query": [],
    "header": [],
    "path": [
        "namespace_id",
        "trigger_name"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "namespace_id": z.string().describe("The ID of the namespace to be managed."),
    "trigger_name": z.string().describe("The name of the trigger to be managed.")
};
