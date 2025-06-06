import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_coupons",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/coupons",
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
      "code": "code",
      "amount": "amount",
      "discount_type": "discount_type",
      "description": "description",
      "date_expires": "date_expires",
      "date_expires_gmt": "date_expires_gmt",
      "individual_use": "individual_use",
      "product_ids": "product_ids",
      "excluded_product_ids": "excluded_product_ids",
      "usage_limit": "usage_limit",
      "usage_limit_per_user": "usage_limit_per_user",
      "limit_usage_to_x_items": "limit_usage_to_x_items",
      "free_shipping": "free_shipping",
      "product_categories": "product_categories",
      "excluded_product_categories": "excluded_product_categories",
      "exclude_sale_items": "exclude_sale_items",
      "minimum_amount": "minimum_amount",
      "maximum_amount": "maximum_amount",
      "email_restrictions": "email_restrictions",
      "meta_data": "meta_data"
    }
  },
  inputParamsSchema
}

export default tool