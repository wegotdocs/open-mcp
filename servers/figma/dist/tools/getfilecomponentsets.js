import { z } from "zod";
export const toolName = `getfilecomponentsets`;
export const toolDescription = `Get file component sets`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/files/{file_key}/component_sets`;
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
    "query": [],
    "header": [],
    "path": [
        "file_key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "file_key": z.string().describe("File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches.") }).shape;
