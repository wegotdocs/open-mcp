import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_orders",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/orders",
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
    "body": {
      "parent_id": "parent_id",
      "status": "status",
      "currency": "currency",
      "customer_id": "customer_id",
      "customer_note": "customer_note",
      "billing": "billing",
      "shipping": "shipping",
      "payment_method": "payment_method",
      "payment_method_title": "payment_method_title",
      "transaction_id": "transaction_id",
      "meta_data": "meta_data",
      "line_items": "line_items",
      "shipping_lines": "shipping_lines",
      "fee_lines": "fee_lines",
      "coupon_lines": "coupon_lines",
      "set_paid": "set_paid"
    }
  },
  inputParamsSchema
}

export default tool