import { z } from "zod"

export const toolName = `apigee_organizations_analytics_datastores_test`
export const toolDescription = `Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/analytics/datastores:test`
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
    "createTime",
    "targetType",
    "org",
    "datastoreConfig",
    "displayName",
    "lastUpdateTime",
    "self"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "createTime": z.string().describe("Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "targetType": z.string().describe("Destination storage type. Supported types `gcs` or `bigquery`.").optional(),
  "org": z.string().describe("Output only. Organization that the datastore belongs to").readonly().optional(),
  "datastoreConfig": z.object({ "tablePrefix": z.string().describe("Prefix of BigQuery table Required for `bigquery` target_type.").optional(), "bucketName": z.string().describe("Name of the Cloud Storage bucket. Required for `gcs` target_type.").optional(), "datasetName": z.string().describe("BigQuery dataset name Required for `bigquery` target_type.").optional(), "path": z.string().describe("Path of Cloud Storage bucket Required for `gcs` target_type.").optional(), "projectId": z.string().describe("Required. Google Cloud project in which the datastore exists").optional() }).describe("Datastore Configurations.").optional(),
  "displayName": z.string().describe("Required. Display name in UI").optional(),
  "lastUpdateTime": z.string().describe("Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z").readonly().optional(),
  "self": z.string().describe("Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}`").readonly().optional()
}