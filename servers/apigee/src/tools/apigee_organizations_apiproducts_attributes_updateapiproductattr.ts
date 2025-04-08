import { z } from "zod"

export const toolName = `apigee_organizations_apiproducts_attributes_updateapiproductattr`
export const toolDescription = `Updates the value of an API product attribute. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (current default). Any custom attributes associated with`
export const baseUrl = `https://apigee.googleapis.com`
export const path = `/v1/organizations/{organizationsId}/apiproducts/{apiproductsId}/attributes/{attributesId}`
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
    "apiproductsId",
    "attributesId"
  ],
  "cookie": [],
  "body": [
    "name",
    "value"
  ]
}
export const flatMap = {}

export const inputParams = {
  "organizationsId": z.string(),
  "apiproductsId": z.string(),
  "attributesId": z.string(),
  "name": z.string().describe("API key of the attribute.").optional(),
  "value": z.string().describe("Value of the attribute.").optional()
}