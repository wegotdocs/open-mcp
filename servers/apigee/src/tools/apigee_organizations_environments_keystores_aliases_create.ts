import { z } from "zod"

export const toolName = `apigee_organizations_environments_keystores_aliases_create`
export const toolDescription = `Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data``
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/keystores/{keystoresId}/aliases`
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
    "format",
    "_password",
    "ignoreExpiryValidation",
    "alias",
    "ignoreNewlineValidation"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "keystoresId"
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
  "environmentsId": z.string(),
  "keystoresId": z.string(),
  "format": z.string().optional(),
  "_password": z.string().optional(),
  "ignoreExpiryValidation": z.boolean().optional(),
  "alias": z.string().optional(),
  "ignoreNewlineValidation": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}