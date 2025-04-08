import { z } from "zod"

export const toolName = `apigee_organizations_appgroups_apps_keys_create`
export const toolDescription = `Creates a custom consumer key and secret for a AppGroup app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, unders`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys`
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
    "appgroupsId",
    "appsId"
  ],
  "cookie": [],
  "body": [
    "consumerKey",
    "issuedAt",
    "attributes",
    "apiProducts",
    "expiresInSeconds",
    "scopes",
    "status",
    "consumerSecret",
    "expiresAt"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "consumerKey": z.string().describe("Immutable. Consumer key.").optional(),
  "issuedAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(),
  "apiProducts": z.array(z.object({ "status": z.string().describe("The API product credential associated status. Valid values are `approved` or `revoked`.").optional(), "apiproduct": z.string().describe("API product to be associated with the credential.").optional() }).describe("APIProductAssociation has the API product and its administrative state association.")).describe("Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.").readonly().optional(),
  "expiresInSeconds": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.").optional(),
  "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(),
  "status": z.string().describe("Status of the credential. Valid values include `approved` or `revoked`.").optional(),
  "consumerSecret": z.string().describe("Secret key.").optional(),
  "expiresAt": z.string().describe("Output only. Time the AppGroup app expires in milliseconds since epoch.").readonly().optional()
}