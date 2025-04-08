import { z } from "zod"

export const toolName = `apigee_organizations_hostsecurityreports_list`
export const toolDescription = `Return a list of Security Reports at host level.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/hostSecurityReports`
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
    "status",
    "envgroupHostname",
    "submittedBy",
    "dataset",
    "pageToken",
    "pageSize",
    "from",
    "to"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "status": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "submittedBy": z.string().optional(),
  "dataset": z.string().optional(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "from": z.string().optional(),
  "to": z.string().optional()
}