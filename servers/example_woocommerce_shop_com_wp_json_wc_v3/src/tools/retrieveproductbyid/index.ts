import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveproductbyid",
  "toolDescription": "This API lets you retrieve and view a specific product by ID.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/products/{productId}",
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
    "path": {
      "productId": "productId"
    }
  },
  inputParamsSchema
}

export default tool