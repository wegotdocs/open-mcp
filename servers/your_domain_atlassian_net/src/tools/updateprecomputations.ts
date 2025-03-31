import { z } from "zod"

export const toolName = `updateprecomputations`
export const toolDescription = `Update precomputations (apps)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/jql/function/computation`
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

export const inputParams = z.object({ "q_skipNotFoundPrecomputations": z.boolean(), "b_values": z.array(z.object({ "error": z.string().describe("The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.").optional(), "id": z.string().describe("The id of the precomputation to update."), "value": z.string().describe("The new value of the precomputation.").optional() }).strict().describe("Precomputation id and its new value.")).optional() }).shape