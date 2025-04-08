import { z } from "zod"

export const toolName = `apigee_organizations_instances_canaryevaluations_create`
export const toolDescription = `Creates a new canary evaluation for an organization.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}/canaryevaluations`
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
    "instancesId"
  ],
  "cookie": [],
  "body": [
    "name",
    "state",
    "verdict",
    "endTime",
    "control",
    "metricLabels",
    "createTime",
    "startTime",
    "treatment"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "name": z.string().describe("Output only. Name of the canary evalution.").readonly().optional(),
  "state": z.enum(["STATE_UNSPECIFIED","RUNNING","SUCCEEDED"]).describe("Output only. The current state of the canary evaluation.").readonly().optional(),
  "verdict": z.enum(["VERDICT_UNSPECIFIED","NONE","FAIL","PASS"]).describe("Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.").readonly().optional(),
  "endTime": z.string().describe("Required. End time for the evaluation's analysis.").optional(),
  "control": z.string().describe("Required. The stable version that is serving requests.").optional(),
  "metricLabels": z.object({ "env": z.string().describe("The environment ID associated with the metrics.").optional(), "instance_id": z.string().describe("Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.").optional(), "location": z.string().describe("Required. The location associated with the metrics.").optional() }).describe("Required. Labels used to filter the metrics used for a canary evaluation.").optional(),
  "createTime": z.string().describe("Output only. Create time of the canary evaluation.").readonly().optional(),
  "startTime": z.string().describe("Required. Start time for the canary evaluation's analysis.").optional(),
  "treatment": z.string().describe("Required. The newer version that is serving requests.").optional()
}