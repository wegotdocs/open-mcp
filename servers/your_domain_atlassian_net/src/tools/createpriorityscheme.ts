import { z } from "zod"

export const toolName = `createpriorityscheme`
export const toolDescription = `Create priority scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priorityscheme`
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

export const inputParams = z.object({ "b_defaultPriorityId": z.number().int().describe("The ID of the default priority for the priority scheme."), "b_description": z.string().max(4000).describe("The description of the priority scheme.").optional(), "b_mappings": z.string().optional(), "b_name": z.string().max(255).describe("The name of the priority scheme. Must be unique."), "b_priorityIds": z.array(z.number().int()).describe("The IDs of priorities in the scheme."), "b_projectIds": z.array(z.number().int()).describe("The IDs of projects that will use the priority scheme.").optional() }).shape