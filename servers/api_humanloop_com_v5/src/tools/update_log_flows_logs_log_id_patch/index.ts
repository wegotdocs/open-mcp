import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_log_flows_logs_log_id_patch",
  "toolDescription": "Update Flow Log",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/flows/logs/{log_id}",
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
      "log_id": "log_id"
    },
    "body": {
      "messages": "messages",
      "output_message": "output_message",
      "inputs": "inputs",
      "output": "output",
      "error": "error",
      "log_status": "log_status"
    }
  },
  inputParamsSchema
}

export default tool