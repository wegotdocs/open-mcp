import { z } from "zod";
export const toolName = `genai_delete_knowledge_base_data_source`;
export const toolDescription = `Delete a Data Source from a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/knowledge_bases/{knowledge_base_uuid}/data_sources/{data_source_uuid}`;
export const method = `delete`;
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
        "knowledge_base_uuid",
        "data_source_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "knowledge_base_uuid": z.string().describe("Knowledge base id"),
    "data_source_uuid": z.string().describe("Data source id")
};
