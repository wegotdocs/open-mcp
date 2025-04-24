import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createthreadandrun",
  "toolDescription": "Create a thread and run it in one request.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/runs",
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
      "assistant_id": "assistant_id",
      "thread": "thread",
      "model": "model",
      "instructions": "instructions",
      "tools": "tools",
      "tool_resources": "tool_resources",
      "metadata": "metadata",
      "temperature": "temperature",
      "top_p": "top_p",
      "stream": "stream",
      "max_prompt_tokens": "max_prompt_tokens",
      "max_completion_tokens": "max_completion_tokens",
      "truncation_strategy": "truncation_strategy",
      "tool_choice": "tool_choice",
      "parallel_tool_calls": "parallel_tool_calls",
      "response_format": "response_format"
    }
  },
  inputParamsSchema
}

export default tool