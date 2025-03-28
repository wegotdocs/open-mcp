import { z } from "zod"

export const toolName = `inviteuser`
export const toolDescription = `Create an invite for a user to the organization. The invite must be accepted by the user before they have access to the organization.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/invites`
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

export const inputParams = z.object({ "body": z.object({ "email": z.string().describe("Send an email to this address"), "role": z.enum(["reader","owner"]).describe("`owner` or `reader`"), "projects": z.array(z.object({ "id": z.string().describe("Project's public ID"), "role": z.enum(["member","owner"]).describe("Project membership role") })).describe("An array of projects to which membership is granted at the same time the org invite is accepted. If omitted, the user will be invited to the default project for compatibility with legacy behavior.").optional() }).optional() }).shape