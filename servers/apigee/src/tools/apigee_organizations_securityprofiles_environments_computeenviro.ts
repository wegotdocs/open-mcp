import { z } from "zod"

export const toolName = `apigee_organizations_securityprofiles_environments_computeenviro`
export const toolDescription = `ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/securityProfiles/{securityProfilesId}/environments/{environmentsId}:computeEnvironmentScores`
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
    "securityProfilesId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "pageSize",
    "timeRange",
    "pageToken",
    "filters"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "securityProfilesId": z.string(),
  "environmentsId": z.string(),
  "pageSize": z.number().int().describe("Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.").optional(),
  "timeRange": z.object({ "endTime": z.string().describe("Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.").optional(), "startTime": z.string().describe("Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.").optional() }).describe("Required. Time range for score calculation. At most 14 days of scores will be returned, and both the start and end dates must be within the last 90 days.").optional(),
  "pageToken": z.string().describe("Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.").optional(),
  "filters": z.array(z.object({ "scorePath": z.string().describe("Optional. Return scores for this component. Example: \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\"").optional() }).describe("Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.")).describe("Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ \"scorePath\": \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\" }, { \"scorePath\": \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\", }] This will return components with path: \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source\" OR \"/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target\"").optional()
}