import { z } from "zod"

export const toolName = `apigee_organizations_developers_attributes`
export const toolDescription = `Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attr`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/attributes`
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
    "developersId"
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
  "attribute": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes.").optional()
}