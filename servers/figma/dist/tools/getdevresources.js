import { z } from "zod";
export const toolName = `getdevresources`;
export const toolDescription = `Get dev resources`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/dev_resources`;
export const method = `get`;
export const security = [
    {
        "key": "X-Figma-Token",
        "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "X_FIGMA_TOKEN",
        "schemeType": "apiKey",
        "schemeName": "X-Figma-Token"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [
        "node_ids"
    ],
    "header": [],
    "path": [
        "file_key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "file_key": z.string().describe("The file to get the dev resources from. This must be a main file key, not a branch key."),
    "node_ids": z.string().describe("Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned.").optional()
};
