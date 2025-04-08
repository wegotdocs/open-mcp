import { z } from "zod"

export const toolName = `apigee_organizations_appgroups_create`
export const toolDescription = `Creates an AppGroup. Once created, user can register apps under the AppGroup to obtain secret key and password. At creation time, the AppGroup's state is set as `active`.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/appgroups`
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
    "name",
    "channelId",
    "organization",
    "appGroupId",
    "attributes",
    "lastModifiedAt",
    "channelUri",
    "status",
    "createdAt",
    "displayName"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "name": z.string().describe("Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\\-$ %.").optional(),
  "channelId": z.string().describe("channel identifier identifies the owner maintaing this grouping.").optional(),
  "organization": z.string().describe("Immutable. the org the app group is created").optional(),
  "appGroupId": z.string().describe("Output only. Internal identifier that cannot be edited").readonly().optional(),
  "attributes": z.array(z.object({ "name": z.string().describe("API key of the attribute.").optional(), "value": z.string().describe("Value of the attribute.").optional() }).describe("Key-value pair to store extra metadata.")).describe("A list of attributes").optional(),
  "lastModifiedAt": z.string().describe("Output only. Modified time as milliseconds since epoch.").readonly().optional(),
  "channelUri": z.string().describe("A reference to the associated storefront/marketplace.").optional(),
  "status": z.string().describe("Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as `active` or `inactive`.").optional(),
  "createdAt": z.string().describe("Output only. Created time as milliseconds since epoch.").readonly().optional(),
  "displayName": z.string().describe("app group name displayed in the UI").optional()
}