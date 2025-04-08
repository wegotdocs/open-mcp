import { z } from "zod"

export const toolName = `apigee_organizations_apps_list`
export const toolDescription = `Lists IDs of apps within an organization that have the specified app status (approved or revoked) or are of the specified app type (developer or company).`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apps`
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
    "expand",
    "rows",
    "ids",
    "includeCred",
    "filter",
    "apiProduct",
    "apptype",
    "pageSize",
    "status",
    "startKey",
    "keyStatus",
    "pageToken"
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
  "expand": z.boolean().optional(),
  "rows": z.string().optional(),
  "ids": z.string().optional(),
  "includeCred": z.boolean().optional(),
  "filter": z.string().optional(),
  "apiProduct": z.string().optional(),
  "apptype": z.string().optional(),
  "pageSize": z.number().int().optional(),
  "status": z.string().optional(),
  "startKey": z.string().optional(),
  "keyStatus": z.string().optional(),
  "pageToken": z.string().optional()
}