import { z } from "zod"

export const toolName = `apigee_organizations_datacollectors_patch`
export const toolDescription = `Updates a data collector.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/datacollectors/{datacollectorsId}`
export const method = `patch`
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
    "updateMask"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "datacollectorsId"
  ],
  "cookie": [],
  "body": [
    "lastModifiedAt",
    "description",
    "name",
    "createdAt",
    "type"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "datacollectorsId": z.string(),
  "updateMask": z.string().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.").readonly().optional(),
  "description": z.string().describe("A description of the data collector.").optional(),
  "name": z.string().describe("ID of the data collector. Must begin with `dc_`.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the data collector was created in milliseconds since the epoch.").readonly().optional(),
  "type": z.enum(["TYPE_UNSPECIFIED","INTEGER","FLOAT","STRING","BOOLEAN","DATETIME"]).describe("Immutable. The type of data this data collector will collect.").optional()
}