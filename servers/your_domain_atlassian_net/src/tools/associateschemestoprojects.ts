import { z } from "zod"

export const toolName = `associateschemestoprojects`
export const toolDescription = `Associate security scheme to project`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuesecurityschemes/project`
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

export const inputParams = z.object({ "b_oldToNewSecurityLevelMappings": z.array(z.object({ "newLevelId": z.string().describe("The new issue security level ID. Providing null will clear the assigned old level from issues."), "oldLevelId": z.string().describe("The old issue security level ID. Providing null will remap all issues without any assigned levels.") }).strict()).describe("The list of scheme levels which should be remapped to new levels of the issue security scheme.").optional(), "b_projectId": z.string().describe("The ID of the project."), "b_schemeId": z.string().describe("The ID of the issue security scheme. Providing null will clear the association with the issue security scheme.") }).shape