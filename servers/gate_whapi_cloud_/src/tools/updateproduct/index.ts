import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproduct",
  "toolDescription": "Update product",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/business/products/{ProductID}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "ProductID": "ProductID"
    },
    "body": {
      "product_retailer_id": "product_retailer_id",
      "currency": "currency",
      "images": "images",
      "availability": "availability",
      "name": "name",
      "url": "url",
      "description": "description",
      "price": "price",
      "is_hidden": "is_hidden"
    }
  },
  inputParamsSchema
}

export default tool