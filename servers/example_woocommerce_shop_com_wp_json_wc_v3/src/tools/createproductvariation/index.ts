import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproductvariation",
  "toolDescription": "This API helps you to create a new product variation.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/products/{productId}/variations",
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
      "productId": "productId"
    },
    "body": {
      "id": "id",
      "date_created": "date_created",
      "date_created_gmt": "date_created_gmt",
      "date_modified": "date_modified",
      "date_modified_gmt": "date_modified_gmt",
      "description": "description",
      "permalink": "permalink",
      "sku": "sku",
      "price": "price",
      "regular_price": "regular_price",
      "sale_price": "sale_price",
      "date_on_sale_from": "date_on_sale_from",
      "date_on_sale_from_gmt": "date_on_sale_from_gmt",
      "date_on_sale_to": "date_on_sale_to",
      "date_on_sale_to_gmt": "date_on_sale_to_gmt",
      "on_sale": "on_sale",
      "status": "status",
      "purchasable": "purchasable",
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
      "backorders_allowed": "backorders_allowed",
      "backordered": "backordered",
      "weight": "weight",
      "dimensions": "dimensions",
      "shipping_class": "shipping_class",
      "shipping_class_id": "shipping_class_id",
      "image": "image",
      "attributes": "attributes",
      "menu_order": "menu_order",
      "meta_data": "meta_data"
    }
  },
  inputParamsSchema
}

export default tool