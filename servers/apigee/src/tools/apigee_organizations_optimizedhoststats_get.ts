import { z } from "zod"

export const toolName = `apigee_organizations_optimizedhoststats_get`
export const toolDescription = `Similar to GetHostStats except that the response is less verbose.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/optimizedHostStats/{optimizedHostStatsId}`
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
    "topk",
    "envgroupHostname",
    "tsAscending",
    "offset",
    "accuracy",
    "limit",
    "sortby",
    "tzo",
    "realtime",
    "filter",
    "select",
    "timeUnit",
    "sort",
    "timeRange"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "optimizedHostStatsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "optimizedHostStatsId": z.string(),
  "topk": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "tsAscending": z.boolean().optional(),
  "offset": z.string().optional(),
  "accuracy": z.string().optional(),
  "limit": z.string().optional(),
  "sortby": z.string().optional(),
  "tzo": z.string().optional(),
  "realtime": z.boolean().optional(),
  "filter": z.string().optional(),
  "select": z.string().optional(),
  "timeUnit": z.string().optional(),
  "sort": z.string().optional(),
  "timeRange": z.string().optional()
}