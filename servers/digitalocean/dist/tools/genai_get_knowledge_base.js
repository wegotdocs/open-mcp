import { z } from "zod";
export const toolName = `genai_get_knowledge_base`;
export const toolDescription = `Retrieve Information About an Existing Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases/{uuid}`;
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
        "uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "uuid": z.string().describe("Knowledge base id") }).shape;
