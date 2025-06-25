import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createordersappliedtags",
  "toolDescription": "Create Applied Tag",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/orders/{order_id}/applied_tags",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "order_id": "order_id"
    },
    "body": {
      "orders_applied_tag": "orders_applied_tag"
    }
  },
  inputParamsSchema
}

export default tool