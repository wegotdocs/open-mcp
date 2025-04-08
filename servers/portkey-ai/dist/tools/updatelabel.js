import { z } from "zod";
export const toolName = `updatelabel`;
export const toolDescription = `Update a label`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/labels/{labelId}`;
export const method = `put`;
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
    "query": [],
    "header": [],
    "path": [
        "labelId"
    ],
    "cookie": [],
    "body": [
        "name",
        "description",
        "color_code"
    ]
};
export const flatMap = {};
export const inputParams = {
    "labelId": z.string().uuid().describe("ID of the label to update"),
    "name": z.string().regex(new RegExp("^(?!latest$)(?!default$)(?!\\d+$)[a-zA-Z0-9_-]*[^@\\s]?[a-zA-Z0-9_-]*$")).describe("Name of the label").optional(),
    "description": z.string().describe("Description of the label").optional(),
    "color_code": z.string().describe("Color code for the label").optional()
};
