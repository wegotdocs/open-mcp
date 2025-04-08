import { z } from "zod"

export const toolName = `apigee_organizations_environments_stats_get`
export const toolDescription = `Retrieve metrics grouped by dimensions. The types of metrics you can retrieve include traffic, message counts, API call latency, response size, and cache hits and counts. Dimensions let you view metrics in meaningful groups. You can optiona`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/stats/{statsId}`
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
    "tsAscending",
    "timeRange",
    "tzo",
    "offset",
    "accuracy",
    "aggTable",
    "limit",
    "sort",
    "sortby",
    "realtime",
    "topk",
    "sonar",
    "select",
    "filter",
    "timeUnit"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "statsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "statsId": z.string(),
  "tsAscending": z.boolean().optional(),
  "timeRange": z.string().optional(),
  "tzo": z.string().optional(),
  "offset": z.string().optional(),
  "accuracy": z.string().optional(),
  "aggTable": z.string().optional(),
  "limit": z.string().optional(),
  "sort": z.string().optional(),
  "sortby": z.string().optional(),
  "realtime": z.boolean().optional(),
  "topk": z.string().optional(),
  "sonar": z.boolean().optional(),
  "select": z.string().optional(),
  "filter": z.string().optional(),
  "timeUnit": z.string().optional()
}