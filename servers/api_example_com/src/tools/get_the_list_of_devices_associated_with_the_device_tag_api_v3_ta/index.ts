import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_devices_associated_with_the_device_tag_api_v3_ta",
  "toolDescription": "[manager:dev=1] Get the list of devices associated with the device tag.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/dev/{tag_id}/dev_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "tag_id": "tag_id"
    },
    "query": {
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool