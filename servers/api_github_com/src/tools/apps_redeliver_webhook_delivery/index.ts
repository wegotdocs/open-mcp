import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_redeliver_webhook_delivery",
  "toolDescription": "Redeliver a delivery for an app webhook",
  "baseUrl": "https://api.github.com",
  "path": "/app/hook/deliveries/{delivery_id}/attempts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "delivery_id": "delivery_id"
    }
  },
  inputParamsSchema
}

export default tool