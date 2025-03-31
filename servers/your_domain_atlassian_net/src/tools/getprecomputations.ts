import { z } from "zod"

export const toolName = `getprecomputations`
export const toolDescription = `Get precomputations (apps)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/function/computation`
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

export const inputParams = z.object({ "q_functionKey": z.array(z.string()).describe("The function key in format:\n\n *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`\n *  Connect: `[App key]__[Module key]`").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `functionKey` Sorts by the functionKey.\n *  `used` Sorts by the used timestamp.\n *  `created` Sorts by the created timestamp.\n *  `updated` Sorts by the updated timestamp.").optional() }).shape