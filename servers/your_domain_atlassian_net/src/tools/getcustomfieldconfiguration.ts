import { z } from "zod"

export const toolName = `getcustomfieldconfiguration`
export const toolDescription = `Get custom field configurations`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`
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

export const inputParams = z.object({ "p_fieldIdOrKey": z.string().describe("The ID or key of the custom field, for example `customfield_10000`."), "q_id": z.array(z.number().int()).describe("The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`.").optional(), "q_fieldContextId": z.array(z.number().int()).describe("The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`.").optional(), "q_issueId": z.number().int().describe("The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`.").optional(), "q_projectKeyOrId": z.string().describe("The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`.").optional(), "q_issueTypeId": z.string().describe("The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`.").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page.") }).shape