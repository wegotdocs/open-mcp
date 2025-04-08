import { z } from "zod"

export const toolName = `apigee_organizations_sites_apicategories_create`
export const toolDescription = `Creates a new API category.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sites/{sitesId}/apicategories`
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
    "sitesId"
  ],
  "cookie": [],
  "body": [
    "updateTime",
    "id",
    "name",
    "siteId"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "sitesId": z.string(),
  "updateTime": z.string().describe("Time the category was last modified in milliseconds since epoch.").optional(),
  "id": z.string().describe("ID of the category (a UUID).").optional(),
  "name": z.string().describe("Name of the category.").optional(),
  "siteId": z.string().describe("Name of the portal.").optional()
}