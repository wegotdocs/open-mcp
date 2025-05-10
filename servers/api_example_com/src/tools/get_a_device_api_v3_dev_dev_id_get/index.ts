import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_device_api_v3_dev_dev_id_get",
  "toolDescription": "[manager:dev=1] Get a device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}",
  "method": "get",
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