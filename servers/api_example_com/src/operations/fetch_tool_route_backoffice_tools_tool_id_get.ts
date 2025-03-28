import { z } from "zod"

export const toolName = `fetch_tool_route_backoffice_tools_tool_id_get`
export const toolDescription = `Fetch Tool Route`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/tools/{tool_id}`
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

export const inputParams = z.object({ "path": z.object({ "tool_id": z.string() }).optional() }).shape