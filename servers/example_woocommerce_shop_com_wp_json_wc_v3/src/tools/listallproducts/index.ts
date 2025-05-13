import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listallproducts",
  "toolDescription": "This API helps you to view all the products.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/products",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "sku": "sku",
      "attribute": "attribute",
      "per_page": "per_page",
      "page": "page",
      "after": "after",
      "before": "before",
      "modified_after": "modified_after",
      "status": "status",
      "stock_status": "stock_status",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool