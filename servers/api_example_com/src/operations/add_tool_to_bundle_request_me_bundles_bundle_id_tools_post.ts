import { z } from "zod"

export const toolName = `add_tool_to_bundle_request_me_bundles_bundle_id_tools_post`
export const toolDescription = `Add Tool To Bundle Request`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles/{bundle_id}/tools`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "bundle_id": z.number().int() }).optional(), "body": z.object({ "id": z.union([z.number().int(), z.null()]).optional(), "user_bundle_id": z.union([z.number().int(), z.null()]).optional(), "tool_id": z.string(), "config": z.union([z.record(z.any()), z.null()]).optional() }).optional() }).shape