import { z } from "zod"

export const toolName = `apigee_organizations_instances_attachments_delete`
export const toolDescription = `Deletes an attachment. **Note:** Not supported for Apigee hybrid.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}/attachments/{attachmentsId}`
export const method = `delete`
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
    "instancesId",
    "attachmentsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "attachmentsId": z.string()
}