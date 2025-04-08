import { z } from "zod"

export const toolName = `genai_get_anthropic_api_key`
export const toolDescription = `Get Anthropic API Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/gen-ai/anthropic/keys/{api_key_uuid}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "api_key_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "api_key_uuid": z.string().describe("API key ID")
}