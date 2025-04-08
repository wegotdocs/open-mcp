import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityreports_get`
export const toolDescription = `Get security report status If the query is still in progress, the `state` is set to "running" After the query has completed successfully, `state` is set to "completed"`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports/{securityReportsId}`
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
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "securityReportsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityReportsId": z.string()
}