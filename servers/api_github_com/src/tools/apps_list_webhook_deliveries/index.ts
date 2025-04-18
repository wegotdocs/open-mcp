import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_webhook_deliveries",
  "toolDescription": "List deliveries for an app webhook",
  "baseUrl": "https://api.github.com",
  "path": "/app/hook/deliveries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool