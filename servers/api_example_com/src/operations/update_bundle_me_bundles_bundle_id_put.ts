import { z } from "zod"

export const toolName = `update_bundle_me_bundles_bundle_id_put`
export const toolDescription = `Update Bundle`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles/{bundle_id}`
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

export const inputParams = z.object({ "path": z.object({ "bundle_id": z.number().int() }).optional(), "body": z.object({ "id": z.union([z.number().int(), z.null()]).optional(), "user_id": z.union([z.string(), z.null()]).optional(), "name": z.string(), "hidden": z.boolean() }).optional() }).shape