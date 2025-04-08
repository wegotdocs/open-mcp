import { z } from "zod"

export const toolName = `apigee_organizations_apis_list`
export const toolDescription = `Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apis`
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
    "includeRevisions",
    "includeMetaData"
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
  "includeRevisions": z.boolean().optional(),
  "includeMetaData": z.boolean().optional()
}