import { z } from "zod"

export const toolName = `apigee_organizations_environments_securitystats_querytimeseriess`
export const toolDescription = `Retrieve security statistics as a collection of time series.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityStats:queryTimeSeriesStats`
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
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "filter",
    "windowSize",
    "pageToken",
    "pageSize",
    "metrics",
    "dimensions",
    "timestampOrder",
    "timeRange"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "filter": z.string().describe("Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters").optional(),
  "windowSize": z.enum(["WINDOW_SIZE_UNSPECIFIED","MINUTE","HOUR","DAY","MONTH"]).describe("Time buckets to group the stats by.").optional(),
  "pageToken": z.string().describe("Page token stands for a specific collection of time series sequences.").optional(),
  "pageSize": z.number().int().describe("Page size represents the number of time series sequences, one per unique set of dimensions and their values.").optional(),
  "metrics": z.array(z.object({ "aggregation": z.enum(["AGGREGATION_FUNCTION_UNSPECIFIED","AVG","SUM","MIN","MAX","COUNT_DISTINCT"]).describe("Aggregation function associated with the metric.").optional(), "order": z.enum(["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"]).describe("Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.").optional(), "name": z.string().describe("Name of the metric").optional() }).describe("The optionally aggregated metric to query with its ordering.")).describe("Required. List of metrics and their aggregations.").optional(),
  "dimensions": z.array(z.string()).describe("List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned.").optional(),
  "timestampOrder": z.enum(["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"]).describe("Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).").optional(),
  "timeRange": z.object({ "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(), "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional() }).describe("Required. Time range for the stats.").optional()
}