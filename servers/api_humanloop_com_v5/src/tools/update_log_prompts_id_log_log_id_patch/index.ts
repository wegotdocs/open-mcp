import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_log_prompts_id_log_log_id_patch",
  "toolDescription": "Update Prompt Log",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/prompts/{id}/log/{log_id}",
  "method": "patch",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "log_id": "log_id"
    },
    "body": {
      "output_message": "output_message",
      "prompt_tokens": "prompt_tokens",
      "reasoning_tokens": "reasoning_tokens",
      "output_tokens": "output_tokens",
      "prompt_cost": "prompt_cost",
      "output_cost": "output_cost",
      "finish_reason": "finish_reason",
      "messages": "messages",
      "tool_choice": "tool_choice",
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
      "start_time": "start_time",
      "end_time": "end_time",
      "log_status": "log_status"
    }
  },
  inputParamsSchema
}

export default tool