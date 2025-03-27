import { z } from "zod"

export const toolName = `createuser`
export const toolDescription = `Create a user`
export const baseUrl = `https://api.nexmo.com/v0.1`
export const path = `/users`
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

export const inputParams = z.object({ "body": z.object({ "display_name": z.string().describe("A string to be displayed as user name. It does not need to be unique").optional(), "image_url": z.string().describe("A link to an image for conversations' and users' avatars").optional(), "name": z.string().describe("Unique name for a user").optional() }).describe("Create a Member in invite state ").optional() }).shape