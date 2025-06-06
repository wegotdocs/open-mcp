import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_products_product_id_variations_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/products/{product_id}/variations/{id}",
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
      "product_id": "product_id",
      "id": "id"
    },
    "body": {
      "description": "description",
      "sku": "sku",
      "regular_price": "regular_price",
      "sale_price": "sale_price",
      "date_on_sale_from": "date_on_sale_from",
      "date_on_sale_from_gmt": "date_on_sale_from_gmt",
      "date_on_sale_to": "date_on_sale_to",
      "date_on_sale_to_gmt": "date_on_sale_to_gmt",
      "status": "status",
      "virtual": "virtual",
      "downloadable": "downloadable",
      "downloads": "downloads",
      "download_limit": "download_limit",
      "download_expiry": "download_expiry",
      "tax_status": "tax_status",
      "tax_class": "tax_class",
      "manage_stock": "manage_stock",
      "stock_quantity": "stock_quantity",
      "stock_status": "stock_status",
      "backorders": "backorders",
      "low_stock_amount": "low_stock_amount",
      "weight": "weight",
      "dimensions": "dimensions",
      "shipping_class": "shipping_class",
      "image": "image",
      "attributes": "attributes",
      "menu_order": "menu_order",
      "meta_data": "meta_data"
    }
  },
  inputParamsSchema
}

export default tool