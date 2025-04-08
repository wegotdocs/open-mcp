import { z } from "zod";
export const toolName = `createclassification`;
export const toolDescription = `Classifies a Document into labels based on its content.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/classification`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "model",
        "document"
    ]
};
export const flatMap = {};
export const inputParams = {
    "model": z.enum(["rdc-de-2025-02-14", "rdc-de"]).describe("The name of the model that will be used for the Classification. A model name without a date is an alias to the latest version of that model, i.e. `rdc-de` always points to the latest version of `rdc-de`."),
    "document": z.string().describe("Base64-encoded contents of a document (PDF, JPG or PNG)")
};
