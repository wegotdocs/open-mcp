import { z } from "zod"

export const toolName = `apigee_organizations_hostqueries_list`
export const toolDescription = `Return a list of Asynchronous Queries at host level.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/hostQueries`
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
    "submittedBy",
    "status",
    "envgroupHostname",
    "from",
    "dataset",
    "inclQueriesWithoutReport",
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
  "submittedBy": z.string().optional(),
  "status": z.string().optional(),
  "envgroupHostname": z.string().optional(),
  "from": z.string().optional(),
  "dataset": z.string().optional(),
  "inclQueriesWithoutReport": z.string().optional(),
  "to": z.string().optional()
}