import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tag_multiple_devices_api_v3_dev_tag_put",
  "toolDescription": "[manager:dev=2] Tag multiple devices",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/tag",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "flush": "flush",
      "session_id": "session_id"
    },
    "body": {
      "dev_id_list": "dev_id_list",
      "tag_id_list": "tag_id_list"
    }
  },
  inputParamsSchema
}

export default tool