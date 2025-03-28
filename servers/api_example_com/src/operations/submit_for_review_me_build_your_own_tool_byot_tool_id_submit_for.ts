import { z } from "zod"

export const toolName = `submit_for_review_me_build_your_own_tool_byot_tool_id_submit_for`
export const toolDescription = `Submit For Review`
export const baseUrl = `https://api.example.com`
export const path = `/me/build-your-own-tool/{byot_tool_id}/submit-for-review`
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

export const inputParams = z.object({ "path": z.object({ "byot_tool_id": z.string().uuid() }).optional() }).shape