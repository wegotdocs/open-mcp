import { z } from "zod"

export const toolName = `post_api_keys_type_sub_type_`
export const toolDescription = `Create Api Keys`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/api-keys/{type}/{sub-type}`
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
  "path": [
    "type",
    "sub-type"
  ],
  "cookie": [],
  "body": [
    "name",
    "description",
    "workspace_id",
    "user_id",
    "rate_limits",
    "usage_limits",
    "scopes",
    "defaults",
    "alert_emails"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.enum(["organisation","workspace"]), "sub-type": z.enum(["user","service"]), "name": z.string().optional(), "description": z.string().optional(), "workspace_id": z.string().optional(), "user_id": z.string().uuid().optional(), "rate_limits": z.array(z.object({ "type": z.string().optional(), "unit": z.string().optional(), "value": z.number().int().optional() })).optional(), "usage_limits": z.object({ "credit_limit": z.number().int().gte(1).describe("Credit Limit. Used for tracking usage"), "alert_threshold": z.number().int().gte(1).describe("Alert Threshold. Used for alerting when usage reaches more than this"), "periodic_reset": z.literal("monthly").describe("Reset the usage periodically.").optional() }).optional(), "scopes": z.array(z.string()).optional(), "defaults": z.object({ "metadata": z.record(z.any()).optional(), "config_id": z.string().optional() }).optional(), "alert_emails": z.array(z.string().email()).optional() }).shape