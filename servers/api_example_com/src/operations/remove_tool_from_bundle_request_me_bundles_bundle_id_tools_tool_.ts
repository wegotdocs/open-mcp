import { z } from "zod"

export const toolName = `remove_tool_from_bundle_request_me_bundles_bundle_id_tools_tool_`
export const toolDescription = `Remove Tool From Bundle Request`
export const baseUrl = `https://api.example.com`
export const path = `/me/bundles/{bundle_id}/tools/{tool_id}`
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

export const inputParams = z.object({ "path": z.object({ "bundle_id": z.number().int(), "tool_id": z.string() }).optional() }).shape