import { z } from "zod"

export const toolName = `apigee_organizations_environments_securityincidents_batchupdate`
export const toolDescription = `BatchUpdateSecurityIncident updates multiple existing security incidents.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/securityIncidents:batchUpdate`
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
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "requests"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "requests": z.array(z.object({ "securityIncident": z.object({ "name": z.string().describe("Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111").optional(), "displayName": z.string().describe("Optional. Display name of the security incident.").optional(), "riskLevel": z.enum(["RISK_LEVEL_UNSPECIFIED","LOW","MODERATE","SEVERE"]).describe("Output only. Risk level of the incident.").readonly().optional(), "trafficCount": z.string().describe("Total traffic detected as part of the incident.").optional(), "observability": z.enum(["OBSERVABILITY_UNSPECIFIED","ACTIVE","ARCHIVED"]).describe("Optional. Indicates if the user archived this incident.").optional(), "firstDetectedTime": z.string().describe("Output only. The time when events associated with the incident were first detected.").readonly().optional(), "lastObservabilityChangeTime": z.string().describe("Output only. The time when the incident observability was last changed.").readonly().optional(), "detectionTypes": z.array(z.string()).describe("Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.").readonly().optional(), "lastDetectedTime": z.string().describe("Output only. The time when events associated with the incident were last detected.").readonly().optional() }).describe("Required. The security incident to update. Must contain all existing populated fields of the current incident.").optional(), "updateMask": z.string().describe("Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange()").optional() }).describe("Request for UpdateSecurityIncident.")).describe("Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in a batch.").optional()
}