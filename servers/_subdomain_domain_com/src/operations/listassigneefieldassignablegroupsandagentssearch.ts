import { z } from "zod"

export const toolName = `listassigneefieldassignablegroupsandagentssearch`
export const toolDescription = `List assignable groups and agents based on query matched against name`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/lotus/assignables/autocomplete.json`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Query string used to search assignable groups & agents in the AssigneeField") }).optional() }).shape