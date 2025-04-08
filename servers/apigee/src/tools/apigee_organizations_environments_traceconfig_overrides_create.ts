import { z } from "zod"

export const toolName = `apigee_organizations_environments_traceconfig_overrides_create`
export const toolDescription = `Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig/overrides`
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
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "apiProxy",
    "name",
    "samplingConfig"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "apiProxy": z.string().describe("ID of the API proxy that will have its trace configuration overridden.").optional(),
  "name": z.string().describe("ID of the trace configuration override specified as a system-generated UUID.").optional(),
  "samplingConfig": z.object({ "sampler": z.enum(["SAMPLER_UNSPECIFIED","OFF","PROBABILITY"]).describe("Sampler of distributed tracing. OFF is the default value.").optional(), "samplingRate": z.number().describe("Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.").optional() }).describe("Trace configuration to override.").optional()
}