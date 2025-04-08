import { z } from "zod"

export const toolName = `searchforissuesusingjqlpost`
export const toolDescription = `Search for issues using JQL (POST)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/search`
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
    "jql",
    "maxResults",
    "properties",
    "startAt",
    "validateQuery"
  ]
}
export const flatMap = {}

export const inputParams = {
  "expand": z.array(z.string()).describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a list of values. The expand options are:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `operations` Returns all possible operations for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(),
  "fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nThe default is `*navigable`.\n\nExamples:\n\n *  `summary,comment` Returns the summary and comments fields only.\n *  `-description` Returns all navigable (default) fields except description.\n *  `*all,-comment` Returns all fields except comments.\n\nMultiple `fields` parameters can be included in a request.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(),
  "fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is `false`.").optional(),
  "jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression.").optional(),
  "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
  "properties": z.array(z.string()).describe("A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.").optional(),
  "startAt": z.number().int().describe("The index of the first item to return in the page of results (page offset). The base index is `0`.").optional(),
  "validateQuery": z.enum(["strict","warn","none","true","false"]).describe("Determines how to validate the JQL query and treat the validation results. Supported values:\n\n *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).\n *  `warn` Returns all errors as warnings.\n *  `none` No validation is performed.\n *  `true` *Deprecated* A legacy synonym for `strict`.\n *  `false` *Deprecated* A legacy synonym for `warn`.\n\nThe default is `strict`.\n\nNote: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.").optional()
}