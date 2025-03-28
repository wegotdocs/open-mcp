import { z } from "zod"

export const toolName = `delete_bundle_me_bundles_bundle_id_delete`
export const toolDescription = `Delete Bundle`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles/{bundle_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "bundle_id": z.number().int() }).optional() }).shape