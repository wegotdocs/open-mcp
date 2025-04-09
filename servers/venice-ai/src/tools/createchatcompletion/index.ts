export { inputParams } from "./schema/root.js"

export const toolName = `createchatcompletion`
export const toolDescription = `/api/v1/chat/completions`
export const baseUrl = `https://api.venice.ai/api/v1`
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
  "header": [
    "Accept-Encoding"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "model",
    "messages",
    "venice_parameters",
    "frequency_penalty",
    "presence_penalty",
    "repetition_penalty",
    "n",
    "max_tokens",
    "max_temp",
    "min_temp",
    "max_completion_tokens",
    "temperature",
    "top_k",
    "top_p",
    "min_p",
    "stop",
    "stop_token_ids",
    "stream",
    "stream_options",
    "user",
    "parallel_tool_calls",
    "tools",
    "tool_choice",
    "response_format"
  ]
}
export const flatMap = {}