import { z } from "zod"

export const toolName = `searchandreconsileissuesusingjqlpost`
export const toolDescription = `Search for issues using JQL enhanced search (POST)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/search/jql`
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

export const inputParams = z.object({ "b_expand": z.string().describe("Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `operations` Returns all possible operations for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.\n\nExamples: `\"names,changelog\"` Returns the display name of each field as well as a list of recent updates to an issue.").optional(), "b_fields": z.array(z.string()).describe("A list of fields to return for each issue. Use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  `id` Returns only issue IDs.\n *  Any issue field, prefixed with a dash to exclude.\n\nThe default is `id`.\n\nExamples:\n\n *  `summary,comment` Returns the summary and comments fields only.\n *  `*all,-comment` Returns all fields except comments.\n\nMultiple `fields` parameters can be included in a request.\n\nNote: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(), "b_fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID). The default is `false`.").optional(), "b_jql": z.string().describe("A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.\n\n *  Example of an unbounded query: `order by key desc`.\n *  Example of a bounded query: `assignee = currentUser() order by key`.\n\nAdditionally, `orderBy` clause can contain a maximum of 7 fields.").optional(), "b_maxResults": z.number().int().describe("The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues."), "b_nextPageToken": z.string().describe("The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues.").optional(), "b_properties": z.array(z.string()).describe("A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list.").optional(), "b_reconcileIssues": z.array(z.number().int()).describe("Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. All issues must exist.").optional() }).shape