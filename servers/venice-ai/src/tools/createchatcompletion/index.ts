import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createchatcompletion",
  "toolDescription": "/api/v1/chat/completions",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/chat/completions",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "frequency_penalty": "frequency_penalty",
      "logprobs": "logprobs",
      "max_completion_tokens": "max_completion_tokens",
      "max_temp": "max_temp",
      "max_tokens": "max_tokens",
      "messages": "messages",
      "min_p": "min_p",
      "min_temp": "min_temp",
      "model": "model",
      "n": "n",
      "presence_penalty": "presence_penalty",
      "repetition_penalty": "repetition_penalty",
      "seed": "seed",
      "stop": "stop",
      "stop_token_ids": "stop_token_ids",
      "stream": "stream",
      "stream_options": "stream_options",
      "temperature": "temperature",
      "top_k": "top_k",
      "top_p": "top_p",
      "user": "user",
      "venice_parameters": "venice_parameters",
      "parallel_tool_calls": "parallel_tool_calls",
      "response_format": "response_format",
      "tool_choice": "tool_choice",
      "tools": "tools"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool