import { z } from "zod"

export const toolName = `apigee_organizations_securityprofiles_list`
export const toolDescription = `ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityProfiles`
export const method = `get`
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
    "pageToken",
    "pageSize"
  ],
  "header": [],
  "path": [
    "organizationsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}