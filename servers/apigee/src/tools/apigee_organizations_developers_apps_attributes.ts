import { z } from "zod"

export const toolName = `apigee_organizations_developers_apps_attributes`
export const toolDescription = `Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/attributes`
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
    "developersId",
    "appsId"
  ],
  "cookie": [],
  "body": [
    "attribute"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "attribute": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes.").optional()
}