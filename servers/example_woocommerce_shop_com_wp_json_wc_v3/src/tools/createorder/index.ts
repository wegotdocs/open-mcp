import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorder",
  "toolDescription": "This API helps you to create a new order.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
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
      "id": "id",
      "parent_id": "parent_id",
      "number": "number",
      "order_key": "order_key",
      "created_via": "created_via",
      "version": "version",
      "status": "status",
      "currency": "currency",
      "date_created": "date_created",
      "date_created_gmt": "date_created_gmt",
      "date_modified": "date_modified",
      "date_modified_gmt": "date_modified_gmt",
      "discount_total": "discount_total",
      "discount_tax": "discount_tax",
      "shipping_total": "shipping_total",
      "shipping_tax": "shipping_tax",
      "cart_tax": "cart_tax",
      "total": "total",
      "total_tax": "total_tax",
      "prices_include_tax": "prices_include_tax",
      "customer_id": "customer_id",
      "customer_ip_address": "customer_ip_address",
      "customer_user_agent": "customer_user_agent",
      "customer_note": "customer_note",
      "billing": "billing",
      "shipping": "shipping",
      "payment_method": "payment_method",
      "payment_method_title": "payment_method_title",
      "transaction_id": "transaction_id",
      "date_paid": "date_paid",
      "date_paid_gmt": "date_paid_gmt",
      "date_completed": "date_completed",
      "date_completed_gmt": "date_completed_gmt",
      "cart_hash": "cart_hash",
      "meta_data": "meta_data",
      "line_items": "line_items",
      "tax_lines": "tax_lines",
      "shipping_lines": "shipping_lines",
      "fee_lines": "fee_lines",
      "coupon_lines": "coupon_lines",
      "refunds": "refunds",
      "set_paid": "set_paid"
    }
  },
  inputParamsSchema
}

export default tool