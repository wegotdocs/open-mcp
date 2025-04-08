import { z } from "zod"

export const toolName = `apigee_organizations_appgroups_update`
export const toolDescription = `Updates an AppGroup. This API replaces the existing AppGroup details with those specified in the request. Include or exclude any existing details that you want to retain or delete, respectively. Note that the state of the AppGroup should be`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/appgroups/{appgroupsId}`
export const method = `put`
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
  "query": [
    "action"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "appgroupsId"
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
  "appgroupsId": z.string(),
  "action": z.string().optional(),
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