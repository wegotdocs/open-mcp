import { z } from "zod"

export const toolName = `createfeedback`
export const toolDescription = `Create new feedback`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/feedback`
export const method = `post`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "trace_id",
    "value",
    "weight",
    "metadata"
  ]
}
export const flatMap = {}

export const inputParams = {
  "trace_id": z.string().describe("Unique identifier for the request trace."),
  "value": z.number().int().gte(-10).lte(10).describe("Feedback value, an integer between -10 and 10."),
  "weight": z.number().gte(0).lte(1).describe("Weight of the feedback, a float between 0 and 1. Default is 1.0.").optional(),
  "metadata": z.record(z.any()).describe("Additional metadata for the feedback.").optional()
}