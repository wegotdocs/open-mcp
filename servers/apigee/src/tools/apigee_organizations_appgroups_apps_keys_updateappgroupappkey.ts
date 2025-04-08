import { z } from "zod"

export const toolName = `apigee_organizations_appgroups_apps_keys_updateappgroupappkey`
export const toolDescription = `Adds an API product to an AppGroupAppKey, enabling the app that holds the key to access the API resources bundled in the API product. In addition, you can add attributes to the AppGroupAppKey. This API replaces the existing attributes with`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/appgroups/{appgroupsId}/apps/{appsId}/keys/{keysId}`
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
    "appsId",
    "keysId"
  ],
  "cookie": [],
  "body": [
    "appGroupAppKey",
    "action",
    "apiProducts"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "appgroupsId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "appGroupAppKey": z.object({ "consumerKey": z.string().describe("Immutable. Consumer key.").optional(), "issuedAt": z.string().describe("Output only. Time the AppGroup app was created in milliseconds since epoch.").readonly().optional(), "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("List of attributes associated with the credential.").optional(), "apiProducts": z.array(z.object({ "status": z.string().describe("The API product credential associated status. Valid values are `approved` or `revoked`.").optional(), "apiproduct": z.string().describe("API product to be associated with the credential.").optional() }).describe("APIProductAssociation has the API product and its administrative state association.")).describe("Output only. List of API products and its status for which the credential can be used. **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the consumer key and secret are created.").readonly().optional(), "expiresInSeconds": z.string().describe("Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.").optional(), "scopes": z.array(z.string()).describe("Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.").optional(), "status": z.string().describe("Status of the credential. Valid values include `approved` or `revoked`.").optional(), "consumerSecret": z.string().describe("Secret key.").optional(), "expiresAt": z.string().describe("Output only. Time the AppGroup app expires in milliseconds since epoch.").readonly().optional() }).describe("The new AppGroupKey to be amended. Note that the status can be updated only via action.").optional(),
  "action": z.string().describe("Approve or revoke the consumer key by setting this value to `approve` or `revoke` respectively. The `Content-Type` header, if set, must be set to `application/octet-stream`, with empty body.").optional(),
  "apiProducts": z.array(z.string()).describe("The list of API products that will be associated with the credential. This list will be appended to the existing list of associated API Products for this App Key. Duplicates will be ignored.").optional()
}