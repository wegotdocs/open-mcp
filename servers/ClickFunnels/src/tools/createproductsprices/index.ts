import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproductsprices",
  "toolDescription": "Create Price",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/{product_id}/prices",
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
      "product_id": "product_id"
    },
    "body": {
      "products_price": "products_price"
    }
  },
  inputParamsSchema
}

export default tool