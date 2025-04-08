import { z } from "zod"

export const toolName = `apigee_organizations_developers_subscriptions_create`
export const toolDescription = `Creates a subscription to an API product.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/subscriptions`
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
    "apiproduct",
    "endTime",
    "createdAt",
    "startTime",
    "lastModifiedAt",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "apiproduct": z.string().describe("Name of the API product for which the developer is purchasing a subscription.").optional(),
  "endTime": z.string().describe("Time when the API product subscription ends in milliseconds since epoch.").optional(),
  "createdAt": z.string().describe("Output only. Time when the API product subscription was created in milliseconds since epoch.").readonly().optional(),
  "startTime": z.string().describe("Time when the API product subscription starts in milliseconds since epoch.").optional(),
  "lastModifiedAt": z.string().describe("Output only. Time when the API product subscription was last modified in milliseconds since epoch.").readonly().optional(),
  "name": z.string().describe("Output only. Name of the API product subscription.").readonly().optional()
}