import { z } from "zod"

export const toolName = `create_project_user`
export const toolDescription = `Adds a user to the project. Users must already be members of the organization to be added to a project.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/projects/{project_id}/users`
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

export const inputParams = z.object({ "path": z.object({ "project_id": z.string().describe("The ID of the project.") }).optional(), "body": z.object({ "user_id": z.string().describe("The ID of the user."), "role": z.enum(["owner","member"]).describe("`owner` or `member`") }).optional() }).shape