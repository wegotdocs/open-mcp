import { z } from "zod"

export const toolName = `apigee_organizations_apis_create`
export const toolDescription = `Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configurati`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apis`
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
  "query": [
    "name",
    "validate",
    "action"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "contentType",
    "extensions",
    "data"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "name": z.string().optional(),
  "validate": z.boolean().optional(),
  "action": z.string().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}