import { z } from "zod"

export const toolName = `apigee_organizations_environments_archivedeployments_patch`
export const toolDescription = `Updates an existing ArchiveDeployment. Labels can modified but most of the other fields are not modifiable.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/archiveDeployments/{archiveDeploymentsId}`
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
    "environmentsId",
    "archiveDeploymentsId"
  ],
  "cookie": [],
  "body": [
    "operation",
    "createdAt",
    "gcsUri",
    "labels",
    "updatedAt",
    "name"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "archiveDeploymentsId": z.string(),
  "updateMask": z.string().optional(),
  "operation": z.string().describe("Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/{org}/operations/{id}`").readonly().optional(),
  "createdAt": z.string().describe("Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.").readonly().optional(),
  "gcsUri": z.string().describe("Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.").optional(),
  "labels": z.record(z.string()).describe("User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.").optional(),
  "updatedAt": z.string().describe("Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.").readonly().optional(),
  "name": z.string().describe("Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.").optional()
}