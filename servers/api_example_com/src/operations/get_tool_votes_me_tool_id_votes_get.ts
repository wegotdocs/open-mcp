import { z } from "zod"

export const toolName = `get_tool_votes_me_tool_id_votes_get`
export const toolDescription = `Get Tool Votes`
export const baseUrl = `https://api.example.com`
export const path = `/me/{tool_id}/votes`
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