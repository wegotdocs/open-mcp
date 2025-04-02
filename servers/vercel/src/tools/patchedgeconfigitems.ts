import { z } from "zod"

export const toolName = `patchedgeconfigitems`
export const toolDescription = `Update Edge Config items in batch`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/edge-config/{edgeConfigId}/items`
export const method = `patch`
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
  "query": [
    "dryRun",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "edgeConfigId"
  ],
  "cookie": [],
  "body": [
    "items",
    "definition"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "edgeConfigId": z.string().regex(new RegExp("^ecfg_")), "dryRun": z.string().optional(), "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(), "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(), "items": z.array(z.object({ "operation": z.enum(["create","update","upsert","delete"]).optional(), "key": z.string().regex(new RegExp("^[\\\\w-]+$")).max(256).optional(), "value": z.any().optional(), "description": z.string().max(512).optional() }).and(z.union([z.object({ "operation": z.literal("create").optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.literal("delete").optional() })]))), "definition": z.any() }).shape