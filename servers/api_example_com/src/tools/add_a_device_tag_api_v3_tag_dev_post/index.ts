import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_device_tag_api_v3_tag_dev_post",
  "toolDescription": "[manger:dev=2] Add a device tag",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/dev",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "org_id": "org_id"
    }
  },
  inputParamsSchema
}

export default tool