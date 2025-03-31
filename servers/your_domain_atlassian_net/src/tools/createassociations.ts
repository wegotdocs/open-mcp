import { z } from "zod"

export const toolName = `createassociations`
export const toolDescription = `Create associations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/field/association`
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

export const inputParams = z.object({ "b_associationContexts": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Field association for example PROJECT\\_ID.")).describe("Contexts to associate/unassociate the fields with."), "b_fields": z.array(z.object({ "identifier": z.record(z.any()).optional(), "type": z.string() }).strict().describe("Identifier for a field for example FIELD\\_ID.")).describe("Fields to associate/unassociate with projects.") }).shape