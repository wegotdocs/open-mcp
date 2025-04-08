import { z } from "zod"

export const toolName = `apigee_organizations_environments_addonsconfig_setaddonenablemen`
export const toolDescription = `Updates an add-on enablement status of an environment.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/addonsConfig:setAddonEnablement`
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
    "apiSecurityEnabled",
    "analyticsEnabled"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apiSecurityEnabled": z.boolean().describe("If the API Security should be enabled in the environment.").optional(),
  "analyticsEnabled": z.boolean().describe("If the Analytics should be enabled in the environment.").optional()
}