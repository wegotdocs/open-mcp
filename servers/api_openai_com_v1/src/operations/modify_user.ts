import { z } from "zod"

export const toolName = `modify_user`
export const toolDescription = `Modifies a user's role in the organization.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/users/{user_id}`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string().describe("The ID of the user.") }).optional(), "body": z.object({ "role": z.enum(["owner","reader"]).describe("`owner` or `reader`") }).optional() }).shape