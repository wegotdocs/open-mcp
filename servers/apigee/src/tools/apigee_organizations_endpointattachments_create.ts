import { z } from "zod"

export const toolName = `apigee_organizations_endpointattachments_create`
export const toolDescription = `Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/endpointAttachments`
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
    "endpointAttachmentId"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "serviceAttachment",
    "state",
    "host",
    "connectionState",
    "name",
    "location"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "endpointAttachmentId": z.string().optional(),
  "serviceAttachment": z.string().describe("Format: projects/*/regions/*/serviceAttachments/*").optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use.").readonly().optional(),
  "host": z.string().describe("Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.").readonly().optional(),
  "connectionState": z.enum(["CONNECTION_STATE_UNSPECIFIED","UNAVAILABLE","PENDING","ACCEPTED","REJECTED","CLOSED","FROZEN","NEEDS_ATTENTION"]).describe("Output only. State of the endpoint attachment connection to the service attachment.").readonly().optional(),
  "name": z.string().describe("Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`").optional(),
  "location": z.string().describe("Required. Location of the endpoint attachment.").optional()
}