export { inputParams } from "./schema/root.js"

export const toolName = `get_finetune_download`
export const toolDescription = `Download model`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/finetune/download`
export const method = `get`
export const security = [
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
  "query": [
    "ft_id",
    "checkpoint_step",
    "checkpoint",
    "output"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}