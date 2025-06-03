import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createproduct",
  "toolDescription": "Update or create a product",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/products",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "businessId": "businessId"
    },
    "body": {
      "id": "id",
      "name": "name",
      "price": "price",
      "description_text": "description_text",
      "taxes": "taxes",
      "is_product_or_service": "is_product_or_service"
    }
  },
  inputParamsSchema
}

export default tool