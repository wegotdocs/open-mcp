import { z } from "zod"

export const toolName = `apigee_organizations_securityprofiles_environments_create`
export const toolDescription = `CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments`
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
    "securityProfilesId"
  ],
  "cookie": [],
  "body": [
    "attachTime",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "attachTime": z.string().describe("Output only. The time when environment was attached to the security profile.").readonly().optional(),
  "name": z.string().describe("Immutable. Name of the environment that the profile is attached to.").optional()
}