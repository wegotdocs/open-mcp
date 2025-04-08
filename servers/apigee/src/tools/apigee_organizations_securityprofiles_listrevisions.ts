import { z } from "zod"

export const toolName = `apigee_organizations_securityprofiles_listrevisions`
export const toolDescription = `ListSecurityProfileRevisions lists all the revisions of the security profile.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}:listRevisions`
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
    "pageSize",
    "pageToken"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "securityProfilesId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "pageSize": z.number().int().optional(),
  "pageToken": z.string().optional()
}