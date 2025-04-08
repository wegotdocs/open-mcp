import { z } from "zod"

export const toolName = `apigee_organizations_environments_apis_revisions_debugsessions_c`
export const toolDescription = `Creates a debug session for a deployed API Proxy revision.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/apis/{apisId}/revisions/{revisionsId}/debugsessions`
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
  "query": [
    "timeout"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "apisId",
    "revisionsId"
  ],
  "cookie": [],
  "body": [
    "filter",
    "b_timeout",
    "name",
    "createTime",
    "validity",
    "tracesize",
    "count"
  ]
}
export const flatMap = {
  "b_timeout": "timeout"
}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apisId": z.string(),
  "revisionsId": z.string(),
  "timeout": z.string().optional(),
  "filter": z.string().describe("Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.").optional(),
  "b_timeout": z.string().describe("Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.").optional(),
  "name": z.string().describe("A unique ID for this DebugSession.").optional(),
  "createTime": z.string().describe("Output only. The first transaction creation timestamp, recorded by UAP.").readonly().optional(),
  "validity": z.number().int().describe("Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.").optional(),
  "tracesize": z.number().int().describe("Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.").optional(),
  "count": z.number().int().describe("Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.").optional()
}