import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcompletion",
  "toolDescription": "Creates a completion for the provided prompt and parameters.",
  "baseUrl": "https://api.openai.com/v1",
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
      "model": "model",
      "prompt": "prompt",
      "best_of": "best_of",
      "echo": "echo",
      "frequency_penalty": "frequency_penalty",
      "logit_bias": "logit_bias",
      "logprobs": "logprobs",
      "max_tokens": "max_tokens",
      "n": "n",
      "presence_penalty": "presence_penalty",
      "seed": "seed",
      "stop": "stop",
      "stream": "stream",
      "stream_options": "stream_options",
      "suffix": "suffix",
      "temperature": "temperature",
      "top_p": "top_p",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool