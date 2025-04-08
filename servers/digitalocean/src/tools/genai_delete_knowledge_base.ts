import { z } from "zod"

export const toolName = `genai_delete_knowledge_base`
export const toolDescription = `Delete a Knowledge Base`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/knowledge_bases/{uuid}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "uuid": z.string().describe("Knowledge base id")
}