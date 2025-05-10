import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateproduct",
  "toolDescription": "Update a product",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/products/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "title": "title",
      "price": "price",
      "description": "description",
      "category": "category",
      "image": "image"
    }
  },
  inputParamsSchema
}

export default tool