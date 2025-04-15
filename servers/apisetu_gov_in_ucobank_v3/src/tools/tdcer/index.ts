export { inputParams } from "./schema/root.js"

export const toolName = `tdcer`
export const toolDescription = `TDS Certificate`
export const baseUrl = `https://apisetu.gov.in/ucobank/v3`
export const path = `/tdcer/certificate`
export const method = `post`
export const security = [
  {
    "key": "X-APISETU-APIKEY",
    "value": "<mcp-env-var>X_APISETU_APIKEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_APISETU_APIKEY",
    "schemeType": "apiKey",
    "schemeName": "X-APISETU-APIKEY"
  },
  {
    "key": "X-APISETU-CLIENTID",
    "value": "<mcp-env-var>X_APISETU_CLIENTID</mcp-env-var>",
    "in": "header",
    "envVarName": "X_APISETU_CLIENTID",
    "schemeType": "apiKey",
    "schemeName": "X-APISETU-CLIENTID"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "certificateParameters",
    "consentArtifact",
    "format",
    "txnId"
  ]
}
export const flatMap = {}