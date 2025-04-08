import { z } from "zod"

export const toolName = `deleteteam`
export const toolDescription = `Delete a Team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}`
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
export const keys = {
  "query": [
    "newDefaultTeamId",
    "slug"
  ],
  "header": [],
  "path": [
    "teamId"
  ],
  "cookie": [],
  "body": [
    "reasons"
  ]
}
export const flatMap = {}

export const inputParams = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of."),
  "newDefaultTeamId": z.string().describe("Id of the team to be set as the new default team").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "reasons": z.array(z.object({ "slug": z.string().describe("Idenitifier slug of the reason why the team is being deleted."), "description": z.string().describe("Description of the reason why the team is being deleted.") }).strict().describe("An object describing the reason why the team is being deleted.")).describe("Optional array of objects that describe the reason why the team is being deleted.").optional()
}