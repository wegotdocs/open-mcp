import { z } from "zod"

export const toolName = `apigee_organizations_instances_reportstatus`
export const toolDescription = `Reports the latest status for a runtime instance.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}:reportStatus`
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
    "resources",
    "reportTime",
    "instanceUid"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "resources": z.array(z.object({ "resource": z.string().describe("The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig").optional(), "totalReplicas": z.number().int().describe("The total number of replicas that should have this resource.").optional(), "uid": z.string().describe("The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.").optional(), "revisions": z.array(z.object({ "jsonSpec": z.string().describe("The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits.").optional(), "errors": z.array(z.object({ "message": z.string().describe("User-friendly error message.").optional(), "type": z.string().describe("A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances.").optional(), "resource": z.string().describe("The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource.").optional(), "code": z.enum(["OK","CANCELLED","UNKNOWN","INVALID_ARGUMENT","DEADLINE_EXCEEDED","NOT_FOUND","ALREADY_EXISTS","PERMISSION_DENIED","UNAUTHENTICATED","RESOURCE_EXHAUSTED","FAILED_PRECONDITION","ABORTED","OUT_OF_RANGE","UNIMPLEMENTED","INTERNAL","UNAVAILABLE","DATA_LOSS"]).describe("Status code.").optional() }).describe("Details on why a resource update failed in the runtime.")).describe("Errors reported when attempting to load this revision.").optional(), "revisionId": z.string().describe("The revision of the resource.").optional(), "replicas": z.number().int().describe("The number of replicas that have successfully loaded this revision.").optional() }).describe("The status of a specific resource revision.")).describe("Revisions of the resource currently deployed in the instance.").optional() }).describe("The status of a resource loaded in the runtime.")).describe("Status for config resources").optional(),
  "reportTime": z.string().describe("The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.").optional(),
  "instanceUid": z.string().describe("A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.").optional()
}