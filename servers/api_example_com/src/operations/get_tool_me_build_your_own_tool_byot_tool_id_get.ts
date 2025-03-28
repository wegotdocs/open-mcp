import { z } from "zod"

export const toolName = `get_tool_me_build_your_own_tool_byot_tool_id_get`
export const toolDescription = `Get Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/build-your-own-tool/{byot_tool_id}`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "byot_tool_id": z.string().uuid() }).optional() }).shape