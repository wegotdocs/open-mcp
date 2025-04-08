import { z } from "zod"

export const toolName = `getissue`
export const toolDescription = `Get issue`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/{issueIdOrKey}`
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
export const keys = {
  "query": [
    "fields",
    "fieldsByKeys",
    "expand",
    "properties",
    "updateHistory",
    "failFast"
  ],
  "header": [],
  "path": [
    "issueIdOrKey"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "issueIdOrKey": z.string().describe("The ID or key of the issue."),
  "fields": z.array(z.string()).describe("A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  `summary,comment` Returns only the summary and comments fields.\n *  `-description` Returns all (default) fields except description.\n *  `*navigable,-comment` Returns all navigable fields except comment.\n\nThis parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.\n\nNote: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.").optional(),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.").optional(),
  "properties": z.array(z.string()).describe("A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:\n\n *  `*all` Returns all issue properties.\n *  Any issue property key, prefixed with a minus to exclude.\n\nExamples:\n\n *  `*all` Returns all properties.\n *  `*all,-prop1` Returns all properties except `prop1`.\n *  `prop1,prop2` Returns `prop1` and `prop2` properties.\n\nThis parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.").optional(),
  "updateHistory": z.boolean().describe("Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field.").optional(),
  "failFast": z.boolean().describe("Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s).").optional()
}