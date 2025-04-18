import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_webhook_delivery",
  "toolDescription": "Get a delivery for an app webhook",
  "baseUrl": "https://api.github.com",
  "path": "/app/hook/deliveries/{delivery_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "delivery_id": "delivery_id"
    }
  },
  inputParamsSchema
}

export default tool