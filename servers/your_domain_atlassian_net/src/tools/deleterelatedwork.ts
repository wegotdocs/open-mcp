import { z } from "zod"

export const toolName = `deleterelatedwork`
export const toolDescription = `Delete related work`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/version/{versionId}/relatedwork/{relatedWorkId}`
export const method = `delete`
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

export const inputParams = z.object({ "p_versionId": z.string().describe("The ID of the version that the target related work belongs to."), "p_relatedWorkId": z.string().describe("The ID of the related work to delete.") }).shape