import { z } from "zod"

export const toolName = `apigee_organizations_instances_nataddresses_list`
export const toolDescription = `Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/instances/{instancesId}/natAddresses`
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
    "pageToken",
    "pageSize"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "instancesId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "instancesId": z.string(),
  "pageToken": z.string().optional(),
  "pageSize": z.number().int().optional()
}