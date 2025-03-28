import { z } from "zod"

export const toolName = `del_tool_vote_me_tool_id_upvote_delete`
export const toolDescription = `Del Tool Vote`
export const baseUrl = `https://api.example.com`
export const path = `/me/{tool_id}/upvote`
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

export const inputParams = z.object({ "path": z.object({ "tool_id": z.string() }).optional() }).shape