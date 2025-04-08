import { z } from "zod"

export const toolName = `apigee_organizations_sharedflows_create`
export const toolDescription = `Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision m`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sharedflows`
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
  "action": z.string().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}