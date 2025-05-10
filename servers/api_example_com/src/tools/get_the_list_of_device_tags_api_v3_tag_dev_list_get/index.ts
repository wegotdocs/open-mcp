import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_device_tags_api_v3_tag_dev_list_get",
  "toolDescription": "[manger:dev=1] Get the list of device tags",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/tag/dev/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "org_id": "org_id",
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool