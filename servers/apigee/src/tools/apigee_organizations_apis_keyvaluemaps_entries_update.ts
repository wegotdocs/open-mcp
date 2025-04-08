import { z } from "zod"

export const toolName = `apigee_organizations_apis_keyvaluemaps_entries_update`
export const toolDescription = `Update key value entry scoped to an organization, environment, or API proxy for an existing key.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apis/{apisId}/keyvaluemaps/{keyvaluemapsId}/entries/{entriesId}`
export const method = `put`
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
    "apisId",
    "keyvaluemapsId",
    "entriesId"
  ],
  "cookie": [],
  "body": [
    "name",
    "value"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "apisId": z.string(),
  "keyvaluemapsId": z.string(),
  "entriesId": z.string(),
  "name": z.string().describe("Resource URI that can be used to identify the scope of the key value map entries.").optional(),
  "value": z.string().describe("Required. Data or payload that is being retrieved and associated with the unique key.").optional()
}