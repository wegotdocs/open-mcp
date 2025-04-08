import { z } from "zod"

export const toolName = `apigee_organizations_sharedflows_delete`
export const toolDescription = `Deletes a shared flow and all it's revisions. The shared flow must be undeployed before you can delete it.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/sharedflows/{sharedflowsId}`
export const method = `delete`
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
    "sharedflowsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "sharedflowsId": z.string()
}