import { z } from "zod"

export const toolName = `apigee_organizations_developers_apps_keys_create`
export const toolDescription = `Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, under`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys`
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
    "consumerSecret",
    "scopes",
    "status",
    "apiProducts",
    "attributes",
    "issuedAt",
    "consumerKey",
    "expiresAt",
    "expiresInSeconds"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include `approved` or `revoked`.").optional(),
  "apiProducts": z.array(z.any()).describe("List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.").optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "issuedAt": z.string().describe("Time the developer app was created in milliseconds since epoch.").optional(),
  "consumerKey": z.string().describe("Consumer key.").optional(),
  "expiresAt": z.string().describe("Time the developer app expires in milliseconds since epoch.").optional(),
  "expiresInSeconds": z.string().describe("Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.").optional()
}