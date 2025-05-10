import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_html_addons_api_v3_media_html_addon_list_get",
  "toolDescription": "[user:content=1] Get the list of HTML addons",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/media/html_addon_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool