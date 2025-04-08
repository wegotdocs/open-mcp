import { z } from "zod"

export const toolName = `apigee_organizations_environments_updatedebugmask`
export const toolDescription = `Updates the debug mask singleton resource for an environment.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/environments/{environmentsId}/debugmask`
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
    "replaceRepeatedFields",
    "updateMask"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "environmentsId"
  ],
  "cookie": [],
  "body": [
    "requestJSONPaths",
    "requestXPaths",
    "responseJSONPaths",
    "variables",
    "namespaces",
    "faultXPaths",
    "responseXPaths",
    "name",
    "faultJSONPaths"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "environmentsId": z.string(),
  "replaceRepeatedFields": z.boolean().optional(),
  "updateMask": z.string().optional(),
  "requestJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.").optional(),
  "requestXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML request message payloads.").optional(),
  "responseJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.").optional(),
  "variables": z.array(z.string()).describe("List of variables that should be masked from the debug output.").optional(),
  "namespaces": z.record(z.string()).describe("Map of namespaces to URIs.").optional(),
  "faultXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.").optional(),
  "responseXPaths": z.array(z.string()).describe("List of XPaths that specify the XML elements to be filtered from XML response message payloads.").optional(),
  "name": z.string().describe("Name of the debug mask.").optional(),
  "faultJSONPaths": z.array(z.string()).describe("List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.").optional()
}