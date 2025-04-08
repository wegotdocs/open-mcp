import { z } from "zod"

export const toolName = `apigee_organizations_environments_resourcefiles_listenvironmentr`
export const toolDescription = `Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/resourcefiles/{type}`
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
    "type"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "type": z.string()
}