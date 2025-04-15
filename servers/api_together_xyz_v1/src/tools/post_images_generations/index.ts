export { inputParams } from "./schema/root.js"

export const toolName = `post_images_generations`
export const toolDescription = `Create image`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/images/generations`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "prompt",
    "model",
    "steps",
    "image_url",
    "seed",
    "n",
    "height",
    "width",
    "negative_prompt",
    "response_format",
    "guidance",
    "output_format",
    "image_loras"
  ]
}
export const flatMap = {}