import { z } from "zod"

export const toolName = `apigee_organizations_securityassessmentresults_batchcompute`
export const toolDescription = `Compute RAV2 security scores for a set of resources.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityAssessmentResults:batchCompute`
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
    "profile",
    "include",
    "pageToken",
    "includeAllResources",
    "scope",
    "pageSize"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "profile": z.string().describe("Required. Name of the profile that is used for computation.").optional(),
  "include": z.object({ "resources": z.array(z.object({ "name": z.string().describe("Required. Name of this resource.").optional(), "type": z.enum(["RESOURCE_TYPE_UNSPECIFIED","API_PROXY"]).describe("Required. Type of this resource.").optional() }).describe("Resource for which we are computing security assessment.")).describe("Required. The array of resources. For Apigee, the proxies are resources.").optional() }).describe("Include only these resources.").optional(),
  "pageToken": z.string().describe("Optional. A page token, received from a previous `BatchComputeSecurityAssessmentResults` call. Provide this to retrieve the subsequent page.").optional(),
  "includeAllResources": z.object({}).describe("Include all resources under the scope.").optional(),
  "scope": z.string().describe("Required. Scope of the resources for the computation. For Apigee, the environment is the scope of the resources.").optional(),
  "pageSize": z.number().int().describe("Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 50 results will be returned.").optional()
}