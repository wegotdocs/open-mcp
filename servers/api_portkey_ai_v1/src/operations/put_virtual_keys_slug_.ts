import { z } from "zod"

export const toolName = `put_virtual_keys_slug_`
export const toolDescription = `Update a Virtual Key`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/virtual-keys/{slug}`
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

export const inputParams = z.object({ "path": z.object({ "slug": z.string() }).optional(), "body": z.object({ "name": z.string().optional(), "key": z.string().optional(), "note": z.string().nullable().optional(), "deploymentConfig": z.array(z.object({ "apiVersion": z.string(), "alias": z.string().optional(), "is_default": z.boolean().optional(), "deploymentName": z.string() })).optional(), "usage_limits": z.object({ "credit_limit": z.number().int().gte(1).describe("Credit Limit. Used for tracking usage"), "alert_threshold": z.number().int().gte(1).describe("Alert Threshold. Used for alerting when usage reaches more than this"), "periodic_reset": z.literal("monthly").describe("Reset the usage periodically.").optional() }).optional() }).optional() }).shape