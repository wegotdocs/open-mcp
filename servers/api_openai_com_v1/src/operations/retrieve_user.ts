import { z } from "zod"

export const toolName = `retrieve_user`
export const toolDescription = `Retrieves a user by their identifier.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/users/{user_id}`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string().describe("The ID of the user.") }).optional() }).shape