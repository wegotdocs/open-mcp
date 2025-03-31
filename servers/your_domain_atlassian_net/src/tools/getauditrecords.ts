import { z } from "zod"

export const toolName = `getauditrecords`
export const toolDescription = `Get audit records`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/auditing/record`
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

export const inputParams = z.object({ "q_offset": z.number().int().describe("The number of records to skip before returning the first result."), "q_limit": z.number().int().describe("The maximum number of results to return."), "q_filter": z.string().describe("The strings to match with audit field content, space separated.").optional(), "q_from": z.string().describe("The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.").optional(), "q_to": z.string().describe("The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.").optional() }).shape