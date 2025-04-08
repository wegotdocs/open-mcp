import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityincidents_patch`
export const toolDescription = `UpdateSecurityIncidents updates an existing security incident.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents/{securityIncidentsId}`
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
    "environmentsId",
    "securityIncidentsId"
  ],
  "cookie": [],
  "body": [
    "name",
    "displayName",
    "riskLevel",
    "trafficCount",
    "observability",
    "firstDetectedTime",
    "lastObservabilityChangeTime",
    "detectionTypes",
    "lastDetectedTime"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "securityIncidentsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111").optional(),
  "displayName": z.string().describe("Optional. Display name of the security incident.").optional(),
  "riskLevel": z.enum(["RISK_LEVEL_UNSPECIFIED","LOW","MODERATE","SEVERE"]).describe("Output only. Risk level of the incident.").readonly().optional(),
  "trafficCount": z.string().describe("Total traffic detected as part of the incident.").optional(),
  "observability": z.enum(["OBSERVABILITY_UNSPECIFIED","ACTIVE","ARCHIVED"]).describe("Optional. Indicates if the user archived this incident.").optional(),
  "firstDetectedTime": z.string().describe("Output only. The time when events associated with the incident were first detected.").readonly().optional(),
  "lastObservabilityChangeTime": z.string().describe("Output only. The time when the incident observability was last changed.").readonly().optional(),
  "detectionTypes": z.array(z.string()).describe("Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.").readonly().optional(),
  "lastDetectedTime": z.string().describe("Output only. The time when events associated with the incident were last detected.").readonly().optional()
}