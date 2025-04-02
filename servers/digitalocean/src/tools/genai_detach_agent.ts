import { z } from "zod"

export const toolName = `genai_detach_agent`
export const toolDescription = `Delete Agent Route for an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{parent_agent_uuid}/child_agents/{child_agent_uuid}`
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
    "parent_agent_uuid",
    "child_agent_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "parent_agent_uuid": z.string().describe("Pagent agent id"), "child_agent_uuid": z.string().describe("Routed agent id") }).shape