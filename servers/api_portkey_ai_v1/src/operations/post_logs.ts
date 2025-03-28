import { z } from "zod"

export const toolName = `post_logs`
export const toolDescription = `Insert New logs`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/logs`
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

export const inputParams = z.object({ "body": z.object({ "request": z.object({ "url": z.string(), "method": z.string().optional(), "headers": z.record(z.string()).optional(), "body": z.record(z.any()) }), "response": z.object({ "status": z.number().int().optional(), "headers": z.record(z.string()).optional(), "body": z.record(z.any()), "response_time": z.number().int().optional() }), "metadata": z.object({ "trace_id": z.string().optional(), "span_id": z.string().optional(), "span_name": z.string().optional(), "additionalProperties": z.string().optional() }).optional() }).optional() }).shape