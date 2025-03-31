import { z } from "zod"

export const toolName = `getworklogsforids`
export const toolDescription = `Get worklogs`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/worklog/list`
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

export const inputParams = z.object({ "q_expand": z.string().describe("Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog."), "b_ids": z.array(z.number().int()).describe("A list of worklog IDs.") }).shape