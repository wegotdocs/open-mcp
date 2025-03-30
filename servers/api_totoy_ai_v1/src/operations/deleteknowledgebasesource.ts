import { z } from "zod"

export const toolName = `deleteknowledgebasesource`
export const toolDescription = `Removes a Knowledge Base Source from a Knowledge Base.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases/{knowledge_base_id}/sources/{source_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Knowledge Base`."), "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a `Source` that was uploaded to Totoy.") }).optional() }).shape