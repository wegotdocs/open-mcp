import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_products_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/products/{id}",
  "method": "patch",
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
      "id": "id"
    },
    "body": {
      "name": "name",
      "slug": "slug",
      "date_created": "date_created",
      "date_created_gmt": "date_created_gmt",
      "type": "type",
      "status": "status",
      "featured": "featured",
      "catalog_visibility": "catalog_visibility",
      "description": "description",
      "short_description": "short_description",
      "sku": "sku",
      "regular_price": "regular_price",
      "sale_price": "sale_price",
      "date_on_sale_from": "date_on_sale_from",
      "date_on_sale_from_gmt": "date_on_sale_from_gmt",
      "date_on_sale_to": "date_on_sale_to",
      "date_on_sale_to_gmt": "date_on_sale_to_gmt",
      "virtual": "virtual",
      "downloadable": "downloadable",
      "downloads": "downloads",
      "download_limit": "download_limit",
      "download_expiry": "download_expiry",
      "external_url": "external_url",
      "button_text": "button_text",
      "tax_status": "tax_status",
      "tax_class": "tax_class",
      "manage_stock": "manage_stock",
      "stock_quantity": "stock_quantity",
      "stock_status": "stock_status",
      "backorders": "backorders",
      "low_stock_amount": "low_stock_amount",
      "sold_individually": "sold_individually",
      "weight": "weight",
      "dimensions": "dimensions",
      "shipping_class": "shipping_class",
      "reviews_allowed": "reviews_allowed",
      "upsell_ids": "upsell_ids",
      "cross_sell_ids": "cross_sell_ids",
      "parent_id": "parent_id",
      "purchase_note": "purchase_note",
      "categories": "categories",
      "tags": "tags",
      "images": "images",
      "attributes": "attributes",
      "default_attributes": "default_attributes",
      "menu_order": "menu_order",
      "meta_data": "meta_data"
    }
  },
  inputParamsSchema
}

export default tool