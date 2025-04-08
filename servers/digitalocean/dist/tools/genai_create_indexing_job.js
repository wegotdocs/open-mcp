import { z } from "zod";
export const toolName = `genai_create_indexing_job`;
export const toolDescription = `Start Indexing Job for a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/indexing_jobs`;
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
        "data_source_uuids",
        "knowledge_base_uuid"
    ]
};
export const flatMap = {};
export const inputParams = {
    "data_source_uuids": z.array(z.string()).describe("List of data source ids to index, if none are provided, all data sources will be indexed").optional(),
    "knowledge_base_uuid": z.string().describe("Knowledge base id").optional()
};
