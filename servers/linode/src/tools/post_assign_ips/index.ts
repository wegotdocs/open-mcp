export { inputParams } from "./schema/root.js"

export const toolName = `post_assign_ips`
export const toolDescription = `Assign IP addresses`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/networking/ips/assign`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
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
  "path": [],
  "cookie": [],
  "body": [
    "assignments",
    "region"
  ]
}
export const flatMap = {}