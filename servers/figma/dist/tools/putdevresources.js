import { z } from "zod";
export const toolName = `putdevresources`;
export const toolDescription = `Update dev resources`;
export const baseUrl = `https://api.figma.com`;
export const path = `/v1/dev_resources`;
export const method = `put`;
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
    "path": [],
    "cookie": [],
    "body": [
        "dev_resources"
    ]
};
export const flatMap = {};
export const inputParams = {
    "dev_resources": z.array(z.object({ "id": z.string().describe("Unique identifier of the dev resource"), "name": z.string().describe("The name of the dev resource.").optional(), "url": z.string().describe("The URL of the dev resource.").optional() })).describe("An array of dev resources.")
};
