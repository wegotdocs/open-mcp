export { inputParams } from "./schema/root.js"

export const toolName = `chat_completions`
export const toolDescription = `Create chat completion`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/chat/completions`
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
    "messages",
    "model",
    "max_tokens",
    "stop",
    "temperature",
    "top_p",
    "top_k",
    "context_length_exceeded_behavior",
    "repetition_penalty",
    "stream",
    "logprobs",
    "echo",
    "n",
    "min_p",
    "presence_penalty",
    "frequency_penalty",
    "logit_bias",
    "seed",
    "function_call",
    "response_format",
    "tools",
    "tool_choice",
    "safety_model"
  ]
}
export const flatMap = {}