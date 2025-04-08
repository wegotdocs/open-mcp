import { z } from "zod"

export const toolName = `apigee_organizations_developers_apps_create`
export const toolDescription = `Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID o`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/apps`
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
    "apiProducts",
    "name",
    "scopes",
    "createdAt",
    "appFamily",
    "keyExpiresIn",
    "callbackUrl",
    "credentials",
    "attributes",
    "appId",
    "developerId",
    "lastModifiedAt",
    "status"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "apiProducts": z.array(z.string()).describe("List of API products associated with the developer app.").optional(),
  "name": z.string().describe("Name of the developer app.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.").optional(),
  "createdAt": z.string().describe("Output only. Time the developer app was created in milliseconds since epoch.").readonly().optional(),
  "appFamily": z.string().describe("Developer app family.").optional(),
  "keyExpiresIn": z.string().describe("Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "callbackUrl": z.string().describe("Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.").optional(),
  "credentials": z.array(z.object({ "expiresAt": z.string().describe("Time the credential will expire in milliseconds since epoch.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("Status of the API product. Valid values are `approved` or `revoked`.").optional(), "apiproduct": z.string().describe("Name of the API product.").optional() })).describe("List of API products this credential can be used for.").optional(), "issuedAt": z.string().describe("Time the credential was issued in milliseconds since epoch.").optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with this credential.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "status": z.string().describe("Status of the credential. Valid values include `approved` or `revoked`.").optional(), "scopes": z.array(z.string()).describe("List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.").optional(), "consumerKey": z.string().describe("Consumer key.").optional() })).describe("Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes for the developer app.").optional(),
  "appId": z.string().describe("ID of the developer app.").optional(),
  "developerId": z.string().describe("ID of the developer.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time the developer app was modified in milliseconds since epoch.").readonly().optional(),
  "status": z.string().describe("Status of the credential. Valid values include `approved` or `revoked`.").optional()
}