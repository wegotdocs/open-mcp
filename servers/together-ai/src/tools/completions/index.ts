import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "completions",
  "toolDescription": "Create completion",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/completions",
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
      "prompt": "prompt",
      "model": "model",
      "max_tokens": "max_tokens",
      "stop": "stop",
      "temperature": "temperature",
      "top_p": "top_p",
      "top_k": "top_k",
      "repetition_penalty": "repetition_penalty",
      "stream": "stream",
      "logprobs": "logprobs",
      "echo": "echo",
      "n": "n",
      "safety_model": "safety_model",
      "min_p": "min_p",
      "presence_penalty": "presence_penalty",
      "frequency_penalty": "frequency_penalty",
      "logit_bias": "logit_bias",
      "seed": "seed"
    }
  },
  inputParamsSchema
}

export default tool