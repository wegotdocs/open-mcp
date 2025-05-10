import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_a_device_api_v3_dev_dev_id_delete",
  "toolDescription": "[manager:dev=2] Delete a device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool