import { z } from "zod";
export const toolName = `getknowledgebasesource`;
export const toolDescription = `Retrieves a Knowledge Base Source.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/knowledge-bases/{knowledge_base_id}/sources/{source_id}`;
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
        "knowledge_base_id",
        "source_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Knowledge Base`."),
    "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a `Source` that was uploaded to Totoy.")
};
