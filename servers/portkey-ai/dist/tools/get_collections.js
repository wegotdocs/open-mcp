import { z } from "zod";
export const toolName = `get_collections`;
export const toolDescription = `List collections`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/collections`;
export const method = `get`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [
        "workspace_id",
        "current_page",
        "page_size",
        "search"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "workspace_id": z.string().describe("ID or slug of the workspace"),
    "current_page": z.number().int().gte(0).describe("Page number for pagination (0-indexed)").optional(),
    "page_size": z.number().int().gte(1).describe("Number of items per page").optional(),
    "search": z.string().describe("Search query to filter collections by name").optional()
};
