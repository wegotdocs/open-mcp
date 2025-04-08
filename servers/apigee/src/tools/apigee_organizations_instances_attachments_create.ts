import { z } from "zod"

export const toolName = `apigee_organizations_instances_attachments_create`
export const toolDescription = `Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}/attachments`
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
    "instancesId"
  ],
  "cookie": [],
  "body": [
    "createdAt",
    "name",
    "environment"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "createdAt": z.string().describe("Output only. Time the attachment was created in milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Output only. ID of the attachment.").readonly().optional(),
  "environment": z.string().describe("ID of the attached environment.").optional()
}