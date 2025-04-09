export { inputParams } from "./schema/root.js"

export const toolName = `postvariables`
export const toolDescription = `Create/modify/delete variables`
export const baseUrl = `https://api.figma.com`
export const path = `/v1/files/{file_key}/variables`
export const method = `post`
export const security = [
  {
    "key": "X-Figma-Token",
    "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "X_FIGMA_TOKEN",
    "schemeType": "apiKey",
    "schemeName": "X-Figma-Token"
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
    "file_key"
  ],
  "cookie": [],
  "body": [
    "variableCollections",
    "variableModes",
    "variables",
    "variableModeValues"
  ]
}
export const flatMap = {}