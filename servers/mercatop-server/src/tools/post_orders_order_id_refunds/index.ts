import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_orders_order_id_refunds",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/orders/{order_id}/refunds",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "order_id": "order_id"
    },
    "body": {
      "amount": "amount",
      "reason": "reason",
      "refunded_by": "refunded_by",
      "meta_data": "meta_data",
      "api_refund": "api_refund",
      "api_restock": "api_restock"
    }
  },
  inputParamsSchema
}

export default tool