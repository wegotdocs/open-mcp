export { inputParams } from "./schema/root.js"

export const toolName = `posttesthelperstreasuryoutboundtransfersoutboundtransfer`
export const toolDescription = `Test mode: Update an OutboundTransfer`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "outbound_transfer"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}