import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "chat_completions",
  "toolDescription": "Create chat completion",
  "baseUrl": "https://api.together.xyz/v1",
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
      "messages": "messages",
      "model": "model",
      "max_tokens": "max_tokens",
      "stop": "stop",
      "temperature": "temperature",
      "top_p": "top_p",
      "top_k": "top_k",
      "context_length_exceeded_behavior": "context_length_exceeded_behavior",
      "repetition_penalty": "repetition_penalty",
      "stream": "stream",
      "logprobs": "logprobs",
      "echo": "echo",
      "n": "n",
      "min_p": "min_p",
      "presence_penalty": "presence_penalty",
      "frequency_penalty": "frequency_penalty",
      "logit_bias": "logit_bias",
      "seed": "seed",
      "function_call": "function_call",
      "response_format": "response_format",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "safety_model": "safety_model"
    }
  },
  inputParamsSchema
}

export default tool