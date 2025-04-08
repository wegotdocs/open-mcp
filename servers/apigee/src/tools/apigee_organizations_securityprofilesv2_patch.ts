import { z } from "zod"

export const toolName = `apigee_organizations_securityprofilesv2_patch`
export const toolDescription = `Update a security profile V2.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityProfilesV2/{securityProfilesV2Id}`
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
    "organizationsId",
    "securityProfilesV2Id"
  ],
  "cookie": [],
  "body": [
    "name",
    "googleDefined",
    "createTime",
    "description",
    "profileAssessmentConfigs",
    "updateTime"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "securityProfilesV2Id": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Identifier. Name of the security profile v2 resource. Format: organizations/{org}/securityProfilesV2/{profile}").optional(),
  "googleDefined": z.boolean().describe("Output only. Whether the security profile is google defined.").readonly().optional(),
  "createTime": z.string().describe("Output only. The time of the security profile creation.").readonly().optional(),
  "description": z.string().describe("Optional. The description of the security profile.").optional(),
  "profileAssessmentConfigs": z.record(z.object({ "weight": z.enum(["WEIGHT_UNSPECIFIED","MINOR","MODERATE","MAJOR"]).describe("The weight of the assessment.").optional() }).describe("The configuration definition for a specific assessment.")).describe("Required. The configuration for each assessment in this profile. Key is the name/id of the assessment.").optional(),
  "updateTime": z.string().describe("Output only. The time of the security profile update.").readonly().optional()
}