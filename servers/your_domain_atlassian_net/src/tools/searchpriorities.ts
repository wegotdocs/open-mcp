import { z } from "zod"

export const toolName = `searchpriorities`
export const toolDescription = `Search priorities`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/priority/search`
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

export const inputParams = z.object({ "q_startAt": z.string().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.string().describe("The maximum number of items to return per page."), "q_id": z.array(z.string()).describe("The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`.").optional(), "q_projectId": z.array(z.string()).describe("The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`.").optional(), "q_priorityName": z.string().describe("The name of priority to search for."), "q_onlyDefault": z.boolean().describe("Whether only the default priority is returned."), "q_expand": z.string().describe("Use `schemes` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority.") }).shape