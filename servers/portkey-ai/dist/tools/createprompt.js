import { z } from "zod";
export const toolName = `createprompt`;
export const toolDescription = `Create a new prompt`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/prompts`;
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
        "name",
        "collection_id",
        "string",
        "parameters",
        "functions",
        "tools",
        "tool_choice",
        "model",
        "virtual_key",
        "version_description",
        "template_metadata"
    ]
};
export const flatMap = {};
export const inputParams = {
    "name": z.string(),
    "collection_id": z.string().describe("UUID or slug of the collection"),
    "string": z.string().describe("Prompt template in string format"),
    "parameters": z.record(z.any()).describe("Parameters for the prompt"),
    "functions": z.array(z.any()).describe("Functions for the prompt").optional(),
    "tools": z.array(z.any()).describe("Tools for the prompt").optional(),
    "tool_choice": z.record(z.any()).describe("Tool Choice for the prompt").optional(),
    "model": z.string().describe("The model to use for the prompt").optional(),
    "virtual_key": z.string().describe("The virtual key to use for the prompt").optional(),
    "version_description": z.string().describe("The description of the prompt version").optional(),
    "template_metadata": z.record(z.any()).describe("Metadata for the prompt").optional()
};
