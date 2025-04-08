import { z } from "zod"

export const toolName = `apigee_organizations_sharedflows_revisions_updatesharedflowrevis`
export const toolDescription = `Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content ty`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}/revisions/{revisionsId}`
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
    "validate"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "sharedflowsId",
    "revisionsId"
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
  "sharedflowsId": z.string(),
  "revisionsId": z.string(),
  "validate": z.boolean().optional(),
  "contentType": z.string().describe("The HTTP Content-Type header value specifying the content type of the body.").optional(),
  "extensions": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("Application specific response metadata. Must be set in the first response for streaming APIs.").optional(),
  "data": z.string().describe("The HTTP request/response body as raw binary.").optional()
}