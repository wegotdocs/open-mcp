import { z } from "zod"

export const toolName = `apigee_organizations_reports_create`
export const toolDescription = `Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications abo`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/reports`
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
    "organization",
    "limit",
    "fromTime",
    "properties",
    "comments",
    "filter",
    "dimensions",
    "createdAt",
    "topk",
    "displayName",
    "sortOrder",
    "lastModifiedAt",
    "environment",
    "toTime",
    "timeUnit",
    "name",
    "chartType",
    "metrics",
    "sortByCols",
    "lastViewedAt",
    "offset",
    "tags"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "organization": z.string().describe("Output only. Organization name").readonly().optional(),
  "limit": z.string().describe("Legacy field: not used This field contains the limit for the result retrieved").optional(),
  "fromTime": z.string().describe("Legacy field: not used. Contains the from time for the report").optional(),
  "properties": z.array(z.object({ "value": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("property values").optional(), "property": z.string().describe("name of the property").optional() })).describe("This field contains report properties such as ui metadata etc.").optional(),
  "comments": z.array(z.string()).describe("Legacy field: not used. This field contains a list of comments associated with custom report").optional(),
  "filter": z.string().describe("This field contains the filter expression").optional(),
  "dimensions": z.array(z.string()).describe("This contains the list of dimensions for the report").optional(),
  "createdAt": z.string().describe("Output only. Unix time when the app was created json key: createdAt").readonly().optional(),
  "topk": z.string().describe("Legacy field: not used. This field contains the top k parameter value for restricting the result").optional(),
  "displayName": z.string().describe("This is the display name for the report").optional(),
  "sortOrder": z.string().describe("Legacy field: not used much. Contains the sort order for the sort columns").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt").readonly().optional(),
  "environment": z.string().describe("Output only. Environment name").readonly().optional(),
  "toTime": z.string().describe("Legacy field: not used. Contains the end time for the report").optional(),
  "timeUnit": z.string().describe("This field contains the time unit of aggregation for the report").optional(),
  "name": z.string().describe("Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id").optional(),
  "chartType": z.string().describe("This field contains the chart type for the report").optional(),
  "metrics": z.array(z.object({ "function": z.string().describe("aggregate function").optional(), "name": z.string().describe("name of the metric").optional() }).describe("This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum")).describe("Required. This contains the list of metrics").optional(),
  "sortByCols": z.array(z.string()).describe("Legacy field: not used much. Contains the list of sort by columns").optional(),
  "lastViewedAt": z.string().describe("Output only. Last viewed time of this entity as milliseconds since epoch").readonly().optional(),
  "offset": z.string().describe("Legacy field: not used. This field contains the offset for the data").optional(),
  "tags": z.array(z.string()).describe("Legacy field: not used. This field contains a list of tags associated with custom report").optional()
}