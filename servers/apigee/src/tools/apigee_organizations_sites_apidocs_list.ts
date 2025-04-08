import { z } from "zod"

export const toolName = `apigee_organizations_sites_apidocs_list`
export const toolDescription = `Returns the catalog items associated with a portal.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sites/{sitesId}/apidocs`
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
    "pageSize",
    "pageToken"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "sitesId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}