import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "log_flows_log_post",
  "toolDescription": "Log to a Flow",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/flows/log",
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
      "messages": "messages",
      "output_message": "output_message",
      "run_id": "run_id",
      "path": "path",
      "id": "id",
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
      "log_id": "log_id",
      "flow": "flow"
    }
  },
  inputParamsSchema
}

export default tool