import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_tag_dev_list_api_v3_tag_dev_tag_id_dev_list_put",
  "toolDescription": "☀(manager, device: 2) 設定多個設備到標籤。",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/dev/{tag_id}/dev_list",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
    },
    "query": {
      "flush": "flush",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool