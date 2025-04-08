import { z } from "zod"

export const toolName = `apigee_organizations_environments_queries_list`
export const toolDescription = `Return a list of Asynchronous Queries`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/queries`
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
    "dataset",
    "submittedBy",
    "from",
    "inclQueriesWithoutReport",
    "status"
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
  "dataset": z.string().optional(),
  "submittedBy": z.string().optional(),
  "from": z.string().optional(),
  "inclQueriesWithoutReport": z.string().optional(),
  "status": z.string().optional()
}