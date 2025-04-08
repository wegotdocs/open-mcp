import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityactions_list`
export const toolDescription = `Returns a list of SecurityActions. This returns both enabled and disabled actions.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityActions`
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
    "pageToken",
    "filter",
    "pageSize"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "pageToken": z.string().optional(),
  "filter": z.string().optional(),
  "pageSize": z.number().int().optional()
}