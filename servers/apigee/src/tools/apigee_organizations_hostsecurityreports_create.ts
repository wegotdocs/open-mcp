import { z } from "zod"

export const toolName = `apigee_organizations_hostsecurityreports_create`
export const toolDescription = `Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means tha`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/hostSecurityReports`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
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
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "metrics",
    "dimensions",
    "reportDefinitionId",
    "csvDelimiter",
    "timeRange",
    "filter",
    "groupByTimeUnit",
    "envgroupHostname",
    "mimeType",
    "limit",
    "displayName"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "metrics": z.array(z.object({ "name": z.string().describe("Required. Metric name.").optional(), "alias": z.string().describe("Alias for the metric. Alias will be used to replace metric name in query results.").optional(), "value": z.string().describe("Operand value should be provided when operator is set.").optional(), "aggregationFunction": z.string().describe("Aggregation function: avg, min, max, or sum.").optional(), "operator": z.string().describe("One of `+`, `-`, `/`, `%`, `*`.").optional() }).describe("Metric of the Query")).describe("A list of Metrics.").optional(),
  "dimensions": z.array(z.string()).describe("A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions").optional(),
  "reportDefinitionId": z.string().describe("Report Definition ID.").optional(),
  "csvDelimiter": z.string().describe("Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\\t`).").optional(),
  "timeRange": z.any().describe("Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: \"timeRange\": { \"start\": \"2018-07-29T00:13:00Z\", \"end\": \"2018-08-01T00:18:00Z\" }").optional(),
  "filter": z.string().describe("Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax").optional(),
  "groupByTimeUnit": z.string().describe("Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.").optional(),
  "envgroupHostname": z.string().describe("Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.").optional(),
  "mimeType": z.string().describe("Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.").optional(),
  "limit": z.number().int().describe("Maximum number of rows that can be returned in the result.").optional(),
  "displayName": z.string().describe("Security Report display name which users can specify.").optional()
}