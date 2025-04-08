import { z } from "zod"

export const toolName = `apigee_organizations_environments_flowhooks_attachsharedflowtofl`
export const toolDescription = `Attaches a shared flow to a flow hook.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/flowhooks/{flowhooksId}`
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
  "query": [],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId",
    "flowhooksId"
  ],
  "cookie": [],
  "body": [
    "description",
    "continueOnError",
    "flowHookPoint",
    "sharedFlow"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "flowhooksId": z.string(),
  "description": z.string().describe("Description of the flow hook.").optional(),
  "continueOnError": z.boolean().describe("Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`.").optional(),
  "flowHookPoint": z.string().describe("Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.").readonly().optional(),
  "sharedFlow": z.string().describe("Shared flow attached to this flow hook, or empty if there is none attached.").optional()
}