import { z } from "zod"

export const toolName = `apigee_organizations_hoststats_get`
export const toolDescription = `Retrieve metrics grouped by dimensions in host level. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. Y`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/hostStats/{hostStatsId}`
export const method = `get`
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
  "query": [
    "timeUnit",
    "offset",
    "tzo",
    "tsAscending",
    "envgroupHostname",
    "select",
    "timeRange",
    "limit",
    "realtime",
    "accuracy",
    "topk",
    "sort",
    "filter",
    "sortby"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "hostStatsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "hostStatsId": z.string(),
  "timeUnit": z.string().optional(),
  "offset": z.string().optional(),
  "tzo": z.string().optional(),
  "tsAscending": z.boolean().optional(),
  "envgroupHostname": z.string().optional(),
  "select": z.string().optional(),
  "timeRange": z.string().optional(),
  "limit": z.string().optional(),
  "realtime": z.boolean().optional(),
  "accuracy": z.string().optional(),
  "topk": z.string().optional(),
  "sort": z.string().optional(),
  "filter": z.string().optional(),
  "sortby": z.string().optional()
}