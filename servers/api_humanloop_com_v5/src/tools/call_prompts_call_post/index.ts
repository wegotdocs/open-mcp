import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "call_prompts_call_post",
  "toolDescription": "Call Prompt",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/prompts/call",
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
      "path": "path",
      "id": "id",
      "messages": "messages",
      "tool_choice": "tool_choice",
      "prompt": "prompt",
      "inputs": "inputs",
      "source": "source",
      "metadata": "metadata",
      "start_time": "start_time",
      "end_time": "end_time",
      "log_status": "log_status",
      "source_datapoint_id": "source_datapoint_id",
      "trace_parent_id": "trace_parent_id",
      "user": "user",
      "environment": "b_environment",
      "save": "save",
      "log_id": "log_id",
      "provider_api_keys": "provider_api_keys",
      "num_samples": "num_samples",
      "stream": "stream",
      "return_inputs": "return_inputs",
      "logprobs": "logprobs",
      "suffix": "suffix"
    }
  },
  inputParamsSchema
}

export default tool