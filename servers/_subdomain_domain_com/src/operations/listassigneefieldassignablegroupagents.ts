import { z } from "zod"

export const toolName = `listassigneefieldassignablegroupagents`
export const toolDescription = `List assignable agents from a group on the AssigneeField`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/lotus/assignables/groups/{group_id}/agents.json`
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

export const inputParams = z.object({ "path": z.object({ "group_id": z.number().int().describe("The ID of the group") }).optional() }).shape