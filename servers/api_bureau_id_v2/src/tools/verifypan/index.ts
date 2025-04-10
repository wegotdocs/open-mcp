export { inputParams } from "./schema/root.js"

export const toolName = `verifypan`
export const toolDescription = `Verify PAN and retrieve cardholder name`
export const baseUrl = `https://api.bureau.id/v2`
export const path = `/services/pan-govt-check`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "pan"
  ]
}
export const flatMap = {}