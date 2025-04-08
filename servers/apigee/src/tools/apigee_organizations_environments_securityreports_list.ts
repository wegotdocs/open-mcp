import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityreports_list`
export const toolDescription = `Return a list of Security Reports`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityReports`
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
    "to",
    "submittedBy",
    "status",
    "pageSize",
    "pageToken",
    "dataset",
    "from"
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
  "to": z.string().optional(),
  "submittedBy": z.string().optional(),
  "status": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional(),
  "dataset": z.string().optional(),
  "from": z.string().optional()
}