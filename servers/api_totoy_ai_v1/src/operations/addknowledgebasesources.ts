import { z } from "zod"

export const toolName = `addknowledgebasesources`
export const toolDescription = `Adds Sources to a Knowledge Base.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases/{knowledge_base_id}/sources`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Knowledge Base`.") }).optional(), "body": z.object({ "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("A `source_id` of a `Source` to add as a `Knowledge Base Source`. Only `Sources` that have the same `project_id` as the `Knowledge Base` can be added as `Knowledge Base Sources`.") }).strict().optional() }).shape