import { z } from "zod"

export const toolName = `put_api_keys_id_`
export const toolDescription = `Update Api Keys`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/api-keys/{id}`
export const method = `put`
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
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "name",
    "description",
    "rate_limits",
    "usage_limits",
    "scopes",
    "defaults",
    "alert_emails"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "id": z.string().uuid(), "name": z.string().optional(), "description": z.string().optional(), "rate_limits": z.array(z.object({ "type": z.string().optional(), "unit": z.string().optional(), "value": z.number().int().optional() })).optional(), "usage_limits": z.object({ "credit_limit": z.number().int().gte(1).describe("Credit Limit. Used for tracking usage"), "alert_threshold": z.number().int().gte(1).describe("Alert Threshold. Used for alerting when usage reaches more than this"), "periodic_reset": z.literal("monthly").describe("Reset the usage periodically.").optional() }).optional(), "scopes": z.array(z.string()).optional(), "defaults": z.object({ "metadata": z.record(z.any()).optional(), "config_id": z.string().optional() }).optional(), "alert_emails": z.array(z.string().email()).optional() }).shape