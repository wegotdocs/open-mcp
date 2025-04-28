import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ota_update_multiple_devices_api_v3_task_ota_post",
  "toolDescription": "[manager:dev=2] OTA update multiple devices",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/ota",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "task_in": "task_in",
      "ota_id_list": "ota_id_list",
      "dev_id_list": "dev_id_list"
    }
  },
  inputParamsSchema
}

export default tool