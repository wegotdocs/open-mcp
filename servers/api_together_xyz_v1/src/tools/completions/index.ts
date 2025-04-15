export { inputParams } from "./schema/root.js"

export const toolName = `completions`
export const toolDescription = `Create completion`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/completions`
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
    "max_tokens",
    "stop",
    "temperature",
    "top_p",
    "top_k",
    "repetition_penalty",
    "stream",
    "logprobs",
    "echo",
    "n",
    "safety_model",
    "min_p",
    "presence_penalty",
    "frequency_penalty",
    "logit_bias",
    "seed"
  ]
}
export const flatMap = {}