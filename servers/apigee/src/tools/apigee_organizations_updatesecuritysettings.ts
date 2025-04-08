import { z } from "zod"

export const toolName = `apigee_organizations_updatesecuritysettings`
export const toolDescription = `UpdateSecuritySettings updates the current security settings for API Security.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securitySettings`
export const method = `patch`
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
    "updateMask"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "name",
    "mlRetrainingFeedbackEnabled"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Identifier. Full resource name is always `organizations/{org}/securitySettings`.").optional(),
  "mlRetrainingFeedbackEnabled": z.boolean().describe("Optional. If true the user consents to the use of ML models for Abuse detection.").optional()
}