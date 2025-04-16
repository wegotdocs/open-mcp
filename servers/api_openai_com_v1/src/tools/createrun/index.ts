import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createrun",
  "toolDescription": "Create a run.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/threads/{thread_id}/runs",
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
    "path": {
      "thread_id": "thread_id"
    },
    "query": {
      "include[]": "include[]"
    },
    "body": {
      "assistant_id": "assistant_id",
      "model": "model",
      "reasoning_effort": "reasoning_effort",
      "instructions": "instructions",
      "additional_instructions": "additional_instructions",
      "additional_messages": "additional_messages",
      "tools": "tools",
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