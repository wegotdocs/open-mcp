import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_redeliver_webhook_delivery",
  "toolDescription": "Redeliver a delivery for an organization webhook",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hook_id": "hook_id",
      "delivery_id": "delivery_id"
    }
  },
  inputParamsSchema
}

export default tool