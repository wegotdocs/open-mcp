import { z } from "zod"

export const toolName = `apigee_organizations_developers_apps_keys_apiproducts_updatedeve`
export const toolDescription = `Approves or revokes the consumer key for an API product. After a consumer key is approved, the app can use it to access APIs. A consumer key that is revoked or pending cannot be used to access an API. Any access tokens associated with a rev`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/developers/{developersId}/apps/{appsId}/keys/{keysId}/apiproducts/{apiproductsId}`
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
  "query": [
    "action"
  ],
  "header": [],
  "path": [
    "organizationsId",
    "developersId",
    "appsId",
    "keysId",
    "apiproductsId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "developersId": z.string(),
  "appsId": z.string(),
  "keysId": z.string(),
  "apiproductsId": z.string(),
  "action": z.string().optional()
}