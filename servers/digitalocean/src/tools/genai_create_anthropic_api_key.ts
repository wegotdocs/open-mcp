import { z } from "zod"

export const toolName = `genai_create_anthropic_api_key`
export const toolDescription = `Create Anthropic API Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/anthropic/keys`
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
  "path": [],
  "cookie": [],
  "body": [
    "api_key",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "api_key": z.string().describe("Anthropic API key").optional(),
  "name": z.string().describe("Name of the key").optional()
}