import { z } from "zod"

export const toolName = `apigee_organizations_environments_references_update`
export const toolDescription = `Updates an existing Reference. Note that this operation has PUT semantics; it will replace the entirety of the existing Reference with the resource in the request body.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/references/{referencesId}`
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
    "environmentsId",
    "referencesId"
  ],
  "cookie": [],
  "body": [
    "description",
    "name",
    "refers",
    "resourceType"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "referencesId": z.string(),
  "description": z.string().describe("Optional. A human-readable description of this reference.").optional(),
  "name": z.string().describe("Required. The resource id of this reference. Values must match the regular expression [\\w\\s\\-.]+.").optional(),
  "refers": z.string().describe("Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.").optional(),
  "resourceType": z.string().describe("The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.").optional()
}