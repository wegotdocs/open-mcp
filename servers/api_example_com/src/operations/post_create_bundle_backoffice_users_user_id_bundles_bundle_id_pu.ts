import { z } from "zod"

export const toolName = `post_create_bundle_backoffice_users_user_id_bundles_bundle_id_pu`
export const toolDescription = `Post Create Bundle`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/{user_id}/bundles/{bundle_id}`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string(), "bundle_id": z.number().int() }).optional(), "body": z.object({ "name": z.string(), "hidden": z.boolean() }).describe("User Bundle Create").optional() }).shape