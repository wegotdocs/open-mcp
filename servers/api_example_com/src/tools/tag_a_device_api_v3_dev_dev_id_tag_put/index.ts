import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tag_a_device_api_v3_dev_dev_id_tag_put",
  "toolDescription": "[manager:dev=2] Tag a device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}/tag",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "flush": "flush",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool