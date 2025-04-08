import { z } from "zod"

export const toolName = `apigee_organizations_apis_keyvaluemaps_create`
export const toolDescription = `Creates a key value map in an API proxy.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps`
export const method = `post`
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
    "apisId"
  ],
  "cookie": [],
  "body": [
    "encrypted",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "apisId": z.string(),
  "encrypted": z.boolean().describe("Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.").optional(),
  "name": z.string().describe("Required. ID of the key value map.").optional()
}