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
      "model": "model",
      "messages": "messages",
      "venice_parameters": "venice_parameters",
      "frequency_penalty": "frequency_penalty",
      "presence_penalty": "presence_penalty",
      "repetition_penalty": "repetition_penalty",
      "n": "n",
      "max_tokens": "max_tokens",
      "max_temp": "max_temp",
      "min_temp": "min_temp",
      "max_completion_tokens": "max_completion_tokens",
      "temperature": "temperature",
      "top_k": "top_k",
      "top_p": "top_p",
      "min_p": "min_p",
      "stop": "stop",
      "stop_token_ids": "stop_token_ids",
      "stream": "stream",
      "stream_options": "stream_options",
      "user": "user",
      "parallel_tool_calls": "parallel_tool_calls",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "response_format": "response_format"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool