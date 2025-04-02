import { z } from "zod"

export const toolName = `bulkfetchissues`
export const toolDescription = `Bulk fetch issues`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/issue/bulkfetch`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "expand",
    "fields",
    "fieldsByKeys",
    "issueIdsOrKeys",
    "properties"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "expand": z.array(z.string()).describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `operations` Returns all possible operations for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(), "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nThe default is `*navigable`.\n\nExamples:\n\n *  `summary,comment` Returns the summary and comments fields only.\n *  `-description` Returns all navigable (default) fields except description.\n *  `*all,-comment` Returns all fields except comments.\n\nMultiple `fields` parameters can be included in a request.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(), "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is `false`.").optional(), "issueIdsOrKeys": z.array(z.string()).describe("An array of issue IDs or issue keys to fetch. You can mix issue IDs and keys in the same query."), "properties": z.array(z.string()).describe("A list of issue property keys of issue properties to be included in the results. A maximum of 5 issue property keys can be specified.").optional() }).shape