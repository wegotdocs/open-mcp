import { z } from "zod"

export const toolName = `apigee_organizations_envgroups_patch`
export const toolDescription = `Updates an environment group.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/envgroups/{envgroupsId}`
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
    "envgroupsId"
  ],
  "cookie": [],
  "body": [
    "name",
    "hostnames",
    "createdAt",
    "state",
    "lastModifiedAt"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "updateMask": z.string().optional(),
  "name": z.string().describe("ID of the environment group.").optional(),
  "hostnames": z.array(z.string()).describe("Required. Host names for this environment group.").optional(),
  "createdAt": z.string().describe("Output only. The time at which the environment group was created as milliseconds since epoch.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","CREATING","ACTIVE","DELETING","UPDATING"]).describe("Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.").readonly().optional(),
  "lastModifiedAt": z.string().describe("Output only. The time at which the environment group was last updated as milliseconds since epoch.").readonly().optional()
}