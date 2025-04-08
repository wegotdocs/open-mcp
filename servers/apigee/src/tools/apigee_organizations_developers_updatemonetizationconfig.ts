import { z } from "zod"

export const toolName = `apigee_organizations_developers_updatemonetizationconfig`
export const toolDescription = `Updates the monetization configuration for the developer.`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/monetizationConfig`
export const method = `put`
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
    "developersId"
  ],
  "cookie": [],
  "body": [
    "billingType"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "billingType": z.enum(["BILLING_TYPE_UNSPECIFIED","PREPAID","POSTPAID"]).describe("Billing type.").optional()
}