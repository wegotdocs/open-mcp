import { z } from "zod";
export const toolName = `modifyknowledgebase`;
export const toolDescription = `Modifies a Knowledge Base.`;
export const baseUrl = `https://api.totoy.ai/v1`;
export const path = `/knowledge-bases/{knowledge_base_id}`;
export const method = `patch`;
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
        "knowledge_base_id"
    ],
    "cookie": [],
    "body": [
        "name",
        "instructions",
        "project_id"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Knowledge Base`."), "name": z.string().max(255).describe("The name for the `Knowledge Base`.").optional(), "instructions": z.string().max(4096).describe("The instructions for the `Knowledge Base`.").optional(), "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("The unique identifier for the `Project` that the `Knowledge Base` should be assigned to. If the `project_id` is changed, the `project_ids` of the `Sources` that are used as `Knowledge Base Sources` will also be changed. If a `Source` is used by multiple `Knowledge Bases`, then the `project_id` of the `Knowledge Base` cannot be changed.").optional() }).shape;
