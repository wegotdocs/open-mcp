import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproductsprices",
  "toolDescription": "Update Price",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/products/prices/{id}",
  "method": "put",
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
      "id": "id"
    },
    "body": {
      "products_price": "products_price"
    }
  },
  inputParamsSchema
}

export default tool