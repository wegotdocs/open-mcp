import { z } from "zod"

export const toolName = `apigee_organizations_environments_optimizedstats_get`
export const toolDescription = `Similar to GetStats except that the response is less verbose.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/optimizedStats/{optimizedStatsId}`
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
    "filter",
    "aggTable",
    "select",
    "sortby",
    "timeUnit",
    "timeRange",
    "accuracy",
    "limit",
    "tzo",
    "sort",
    "topk",
    "offset",
    "sonar",
    "realtime"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "optimizedStatsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "optimizedStatsId": z.string(),
  "tsAscending": z.boolean().optional(),
  "filter": z.string().optional(),
  "aggTable": z.string().optional(),
  "select": z.string().optional(),
  "sortby": z.string().optional(),
  "timeUnit": z.string().optional(),
  "timeRange": z.string().optional(),
  "accuracy": z.string().optional(),
  "limit": z.string().optional(),
  "tzo": z.string().optional(),
  "sort": z.string().optional(),
  "topk": z.string().optional(),
  "offset": z.string().optional(),
  "sonar": z.boolean().optional(),
  "realtime": z.boolean().optional()
}