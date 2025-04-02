import { z } from "zod"

export const toolName = `genai_update_agent_function`
export const toolDescription = `Update Function Route for an Agent`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/agents/{agent_uuid}/functions/{function_uuid}`
export const method = `put`
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
    "function_uuid"
  ],
  "cookie": [],
  "body": [
    "b_agent_uuid",
    "description",
    "faas_name",
    "faas_namespace",
    "function_name",
    "b_function_uuid",
    "input_schema",
    "output_schema"
  ]
}
export const flatMap = {
  "b_agent_uuid": "agent_uuid",
  "b_function_uuid": "function_uuid"
}

export const inputParams = z.object({ "agent_uuid": z.string().describe("Agent id"), "function_uuid": z.string().describe("Function id"), "b_agent_uuid": z.string().describe("Agent id").optional(), "description": z.string().describe("Funciton description").optional(), "faas_name": z.string().describe("The name of the function in the DigitalOcean functions platform").optional(), "faas_namespace": z.string().describe("The namespace of the function in the DigitalOcean functions platform").optional(), "function_name": z.string().describe("Function name").optional(), "b_function_uuid": z.string().describe("Function id").optional(), "input_schema": z.record(z.any()).describe("Describe the input schema for the function so the agent may call it").optional(), "output_schema": z.record(z.any()).describe("Describe the output schema for the function so the agent handle its response").optional() }).shape