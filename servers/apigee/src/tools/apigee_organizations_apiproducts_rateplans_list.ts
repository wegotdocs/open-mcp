import { z } from "zod"

export const toolName = `apigee_organizations_apiproducts_rateplans_list`
export const toolDescription = `Lists all the rate plans for an API product.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/rateplans`
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
    "orderBy",
    "expand",
    "startKey",
    "state",
    "count"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "apiproductsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "orderBy": z.string().optional(),
  "expand": z.boolean().optional(),
  "startKey": z.string().optional(),
  "state": z.string().optional(),
  "count": z.number().int().optional()
}