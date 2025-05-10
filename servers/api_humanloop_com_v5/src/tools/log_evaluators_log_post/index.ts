import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "log_evaluators_log_post",
  "toolDescription": "Submit Evaluator Judgment",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluators/log",
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
      "parent_id": "parent_id",
      "source_datapoint_id": "source_datapoint_id",
      "trace_parent_id": "trace_parent_id",
      "user": "user",
      "environment": "b_environment",
      "save": "save",
      "log_id": "log_id",
      "output_message": "output_message",
      "judgment": "judgment",
      "marked_completed": "marked_completed",
      "spec": "spec"
    }
  },
  inputParamsSchema
}

export default tool