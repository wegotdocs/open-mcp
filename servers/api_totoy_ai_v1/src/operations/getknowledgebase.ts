import { z } from "zod"

export const toolName = `getknowledgebase`
export const toolDescription = `Retrieves a Knowledge Base.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/knowledge-bases/{knowledge_base_id}`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a `Knowledge Base`.") }).optional() }).shape