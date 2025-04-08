import { z } from "zod";
export const toolName = `createlabel`;
export const toolDescription = `Create a new label`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/labels`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "organisation_id",
        "workspace_id",
        "name",
        "description",
        "color_code"
    ]
};
export const flatMap = {};
export const inputParams = {
    "organisation_id": z.string().uuid().describe("ID of the organisation").optional(),
    "workspace_id": z.string().describe("ID or slug of the workspace").optional(),
    "name": z.string().regex(new RegExp("^(?!latest$)(?!default$)(?!\\d+$)[a-zA-Z0-9_-]*[^@\\s]?[a-zA-Z0-9_-]*$")).describe("Name of the label"),
    "description": z.string().describe("Description of the label").optional(),
    "color_code": z.string().describe("Color code for the label").optional()
};
