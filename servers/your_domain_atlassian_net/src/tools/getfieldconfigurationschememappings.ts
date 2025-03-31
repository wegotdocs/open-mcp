import { z } from "zod"

export const toolName = `getfieldconfigurationschememappings`
export const toolDescription = `Get field configuration issue type items`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/fieldconfigurationscheme/mapping`
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

export const inputParams = z.object({ "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page."), "q_fieldConfigurationSchemeId": z.array(z.number().int()).min(1).max(50).describe("The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.").optional() }).shape