export { inputParams } from "./schema/root.js"

export const toolName = `launchinstance`
export const toolDescription = `Launch instances`
export const baseUrl = `https://cloud.lambda.ai`
export const path = `/api/v1/instance-operations/launch`
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
  "path": [],
  "cookie": [],
  "body": [
    "region_name",
    "instance_type_name",
    "ssh_key_names",
    "file_system_names",
    "name",
    "image",
    "user_data"
  ]
}
export const flatMap = {}