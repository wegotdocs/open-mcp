import { z } from "zod"

export const toolName = `apigee_organizations_environments_updatetraceconfig`
export const toolDescription = `Updates the trace configurations in an environment. Note that the repeated fields have replace semantics when included in the field mask and that they will be overwritten by the value of the fields in the request body.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/traceConfig`
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
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "endpoint",
    "exporter",
    "samplingConfig"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "updateMask": z.string().optional(),
  "endpoint": z.string().describe("Required. Endpoint of the exporter.").optional(),
  "exporter": z.enum(["EXPORTER_UNSPECIFIED","JAEGER","CLOUD_TRACE"]).describe("Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.").optional(),
  "samplingConfig": z.object({ "sampler": z.enum(["SAMPLER_UNSPECIFIED","OFF","PROBABILITY"]).describe("Sampler of distributed tracing. OFF is the default value.").optional(), "samplingRate": z.number().describe("Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.").optional() }).describe("Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.").optional()
}