import { z } from "zod"

export const toolName = `apigee_organizations_setaddons`
export const toolDescription = `Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}:setAddons`
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
    "organizationsId"
  ],
  "cookie": [],
  "body": [
    "addonsConfig"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "addonsConfig": z.object({ "advancedApiOpsConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Advanced API Ops add-on is enabled.").optional() }).describe("Configuration for the Advanced API Ops add-on.").optional(), "connectorsPlatformConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the Connectors Platform add-on is enabled.").optional() }).describe("Configuration for the Connectors Platform add-on.").optional(), "monetizationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Monetization add-on is enabled.").optional() }).describe("Configuration for the Monetization add-on.").optional(), "analyticsConfig": z.object({ "updateTime": z.string().describe("Output only. The latest update time.").readonly().optional(), "state": z.enum(["ADDON_STATE_UNSPECIFIED","ENABLING","ENABLED","DISABLING","DISABLED"]).describe("Output only. The state of the Analytics add-on.").readonly().optional(), "expireTimeMillis": z.string().describe("Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Whether the Analytics add-on is enabled.").optional() }).describe("Configuration for the Analytics add-on. Only used in organizations.environments.addonsConfig.").optional(), "integrationConfig": z.object({ "enabled": z.boolean().describe("Flag that specifies whether the Integration add-on is enabled.").optional() }).describe("Configuration for the Integration add-on.").optional(), "apiSecurityConfig": z.object({ "expiresAt": z.string().describe("Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.").readonly().optional(), "enabled": z.boolean().describe("Flag that specifies whether the API security add-on is enabled.").optional() }).describe("Configuration for the API Security add-on.").optional() }).describe("Required. Add-on configurations.").optional()
}