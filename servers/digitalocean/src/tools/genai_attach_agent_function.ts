import { z } from "zod"

export const toolName = `genai_attach_agent_function`
export const toolDescription = `Add Function Route to an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/functions`
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
    "agent_uuid"
  ],
  "cookie": [],
  "body": [
    "b_agent_uuid",
    "description",
    "faas_name",
    "faas_namespace",
    "function_name",
    "input_schema",
    "output_schema"
  ]
}
export const flatMap = {
  "b_agent_uuid": "agent_uuid"
}

export const inputParams = z.object({ "agent_uuid": z.string().describe("Agent id"), "b_agent_uuid": z.string().describe("Agent id").optional(), "description": z.string().describe("Function description").optional(), "faas_name": z.string().describe("The name of the function in the DigitalOcean functions platform").optional(), "faas_namespace": z.string().describe("The namespace of the function in the DigitalOcean functions platform").optional(), "function_name": z.string().describe("Function name").optional(), "input_schema": z.record(z.any()).describe("Describe the input schema for the function so the agent may call it").optional(), "output_schema": z.record(z.any()).describe("Describe the output schema for the function so the agent handle its response").optional() }).shape