import { z } from "zod"

export const toolName = `searchforissuesusingjql`
export const toolDescription = `Search for issues using JQL (GET)`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/api/3/search`
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

export const inputParams = z.object({ "q_jql": z.string().describe("The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:\n\n *  If no JQL expression is provided, all issues are returned.\n *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.\n *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.").optional(), "q_startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "q_maxResults": z.number().int().describe("The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only."), "q_validateQuery": z.enum(["strict","warn","none","true","false"]).describe("Determines how to validate the JQL query and treat the validation results. Supported values are:\n\n *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).\n *  `warn` Returns all errors as warnings.\n *  `none` No validation is performed.\n *  `true` *Deprecated* A legacy synonym for `strict`.\n *  `false` *Deprecated* A legacy synonym for `warn`.\n\nNote: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value."), "q_fields": z.array(z.string()).describe("A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:\n\n *  `*all` Returns all fields.\n *  `*navigable` Returns navigable fields.\n *  Any issue field, prefixed with a minus to exclude.\n\nExamples:\n\n *  `summary,comment` Returns only the summary and comments fields.\n *  `-description` Returns all navigable (default) fields except description.\n *  `*all,-comment` Returns all fields except comments.\n\nThis parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.\n\nNote: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.").optional(), "q_expand": z.string().describe("Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `renderedFields` Returns field values rendered in HTML format.\n *  `names` Returns the display name of each field.\n *  `schema` Returns the schema describing a field type.\n *  `transitions` Returns all possible transitions for the issue.\n *  `operations` Returns all possible operations for the issue.\n *  `editmeta` Returns information about how each field can be edited.\n *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.\n *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.").optional(), "q_properties": z.array(z.string()).describe("A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified.").optional(), "q_fieldsByKeys": z.boolean().describe("Reference fields by their key (rather than ID)."), "q_failFast": z.boolean().describe("Whether to fail the request quickly in case of an error while loading fields for an issue. For `failFast=true`, if one field fails, the entire operation fails. For `failFast=false`, the operation will continue even if a field fails. It will return a valid response, but without values for the failed field(s).") }).shape