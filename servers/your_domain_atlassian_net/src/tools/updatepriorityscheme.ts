import { z } from "zod"

export const toolName = `updatepriorityscheme`
export const toolDescription = `Update priority scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priorityscheme/{schemeId}`
export const method = `put`
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

export const inputParams = z.object({ "p_schemeId": z.number().int().describe("The ID of the priority scheme."), "b_defaultPriorityId": z.number().int().describe("The default priority of the scheme.").optional(), "b_description": z.string().max(4000).describe("The description of the priority scheme.").optional(), "b_mappings": z.string().optional(), "b_name": z.string().max(255).describe("The name of the priority scheme. Must be unique.").optional(), "b_priorities": z.string().optional(), "b_projects": z.string().optional() }).shape