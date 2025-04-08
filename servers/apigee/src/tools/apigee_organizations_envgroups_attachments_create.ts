import { z } from "zod"

export const toolName = `apigee_organizations_envgroups_attachments_create`
export const toolDescription = `Creates a new attachment of an environment to an environment group.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/attachments`
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
    "envgroupsId"
  ],
  "cookie": [],
  "body": [
    "environment",
    "environmentGroupId",
    "createdAt",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "environment": z.string().describe("Required. ID of the attached environment.").optional(),
  "environmentGroupId": z.string().describe("Output only. ID of the environment group.").readonly().optional(),
  "createdAt": z.string().describe("Output only. The time at which the environment group attachment was created as milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("ID of the environment group attachment.").optional()
}