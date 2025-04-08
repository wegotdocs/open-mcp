import { z } from "zod"

export const toolName = `apigee_organizations_envgroups_getdeployedingressconfig`
export const toolDescription = `Gets the deployed ingress configuration for an environment group.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/envgroups/{envgroupsId}/deployedIngressConfig`
export const method = `get`
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
    "view"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "envgroupsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "envgroupsId": z.string(),
  "view": z.string().optional()
}