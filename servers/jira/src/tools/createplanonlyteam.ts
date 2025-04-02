import { z } from "zod"

export const toolName = `createplanonlyteam`
export const toolDescription = `Create plan-only team`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/plans/plan/{planId}/team/planonly`
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
    "issueSourceId",
    "memberAccountIds",
    "name",
    "planningStyle",
    "sprintLength"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "planId": z.number().int().describe("The ID of the plan."), "capacity": z.number().describe("The capacity for the plan-only team.").optional(), "issueSourceId": z.number().int().describe("The ID of the issue source for the plan-only team.").optional(), "memberAccountIds": z.array(z.string()).describe("The account IDs of the plan-only team members.").optional(), "name": z.string().min(1).max(255).describe("The plan-only team name."), "planningStyle": z.enum(["Scrum","Kanban"]).describe("The planning style for the plan-only team. This must be \"Scrum\" or \"Kanban\"."), "sprintLength": z.number().int().describe("The sprint length for the plan-only team.").optional() }).shape