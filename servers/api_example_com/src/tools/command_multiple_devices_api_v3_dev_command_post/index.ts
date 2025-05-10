import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "command_multiple_devices_api_v3_dev_command_post",
  "toolDescription": "[manager:dev=2] Command multiple devices",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/command",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "dev_id_list": "dev_id_list",
      "command": "command",
      "log_date": "log_date"
    }
  },
  inputParamsSchema
}

export default tool