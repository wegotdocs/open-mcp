import { z } from "zod"

export const toolName = `getallfieldconfigurations`
export const toolDescription = `Get all field configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/fieldconfiguration`
export const method = `get`
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

export const inputParams = z.object({ "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_id": z.array(z.number().int()).describe("The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.").optional(), "q_isDefault": z.boolean().describe("If *true* returns default field configurations only."), "q_query": z.string().describe("The query string used to match against field configuration names and descriptions.") }).shape