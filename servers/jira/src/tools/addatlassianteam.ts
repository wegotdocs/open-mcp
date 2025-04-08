import { z } from "zod"

export const toolName = `addatlassianteam`
export const toolDescription = `Add Atlassian team to plan`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/plans/plan/{planId}/team/atlassian`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "planId"
  ],
  "cookie": [],
  "body": [
    "capacity",
    "id",
    "issueSourceId",
    "planningStyle",
    "sprintLength"
  ]
}
export const flatMap = {}

export const inputParams = {
  "planId": z.number().int().describe("The ID of the plan."),
  "capacity": z.number().describe("The capacity for the Atlassian team.").optional(),
  "id": z.string().describe("The Atlassian team ID."),
  "issueSourceId": z.number().int().describe("The ID of the issue source for the Atlassian team.").optional(),
  "planningStyle": z.enum(["Scrum","Kanban"]).describe("The planning style for the Atlassian team. This must be \"Scrum\" or \"Kanban\"."),
  "sprintLength": z.number().int().describe("The sprint length for the Atlassian team.").optional()
}