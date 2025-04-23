import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "log_prompts_log_post",
  "toolDescription": "Log to a Prompt",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/prompts/log",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "version_id": "version_id",
      "environment": "environment"
    },
    "body": {
      "run_id": "run_id",
      "path": "path",
      "id": "id",
      "output_message": "output_message",
      "prompt_tokens": "prompt_tokens",
      "reasoning_tokens": "reasoning_tokens",
      "output_tokens": "output_tokens",
      "prompt_cost": "prompt_cost",
      "output_cost": "output_cost",
      "finish_reason": "finish_reason",
      "messages": "messages",
      "tool_choice": "tool_choice",
      "prompt": "prompt",
      "start_time": "start_time",
      "end_time": "end_time",
      "output": "output",
      "created_at": "created_at",
      "error": "error",
      "provider_latency": "provider_latency",
      "stdout": "stdout",
      "provider_request": "provider_request",
      "provider_response": "provider_response",
      "inputs": "inputs",
      "source": "source",
      "metadata": "metadata",
      "log_status": "log_status",
      "source_datapoint_id": "source_datapoint_id",
      "trace_parent_id": "trace_parent_id",
      "user": "user",
      "environment": "b_environment",
      "save": "save",
      "log_id": "log_id"
    }
  },
  inputParamsSchema
}

export default tool