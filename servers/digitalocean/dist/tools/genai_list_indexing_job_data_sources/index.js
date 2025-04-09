export { inputParams } from "./schema/root.js";
export const toolName = `genai_list_indexing_job_data_sources`;
export const toolDescription = `List Data Sources for Indexing Job for a Knowledge Base`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/gen-ai/indexing_jobs/{indexing_job_uuid}/data_sources`;
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
        "indexing_job_uuid"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
