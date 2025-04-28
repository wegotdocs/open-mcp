import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_device_tag_api_v3_tag_dev_tag_id_delete",
  "toolDescription": "[manager:dev=2] Delete a device tag",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/dev/{tag_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool