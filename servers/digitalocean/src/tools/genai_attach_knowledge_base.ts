import { z } from "zod"

export const toolName = `genai_attach_knowledge_base`
export const toolDescription = `Attach Knowledge Base to an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/knowledge_bases/{knowledge_base_uuid}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "agent_uuid",
    "knowledge_base_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "agent_uuid": z.string().describe("A unique identifier for an agent."), "knowledge_base_uuid": z.string().describe("A unique identifier for a knowledge base.") }).shape