import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_devtask_status_api_v3_edge_devtask_devtask_id_put",
  "toolDescription": "[access code] [Update Devtask Status] 更新設備任務狀態。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/edge/devtask/{devtask_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "devtask_id": "devtask_id"
    },
    "query": {
      "display_name": "display_name",
      "status_id": "status_id",
      "total_count": "total_count",
      "downloaded_count": "downloaded_count",
      "download_speed": "download_speed",
      "note": "note",
      "storage_usage": "storage_usage"
    },
    "header": {
      "access-code": "access-code"
    }
  },
  inputParamsSchema
}

export default tool