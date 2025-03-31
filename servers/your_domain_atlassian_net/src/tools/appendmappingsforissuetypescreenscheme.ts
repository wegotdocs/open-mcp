import { z } from "zod"

export const toolName = `appendmappingsforissuetypescreenscheme`
export const toolDescription = `Append mappings to issue type screen scheme`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping`
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

export const inputParams = z.object({ "p_issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme."), "b_issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The list of issue type to screen scheme mappings. A *default* entry cannot be specified because a default entry is added when an issue type screen scheme is created.") }).shape