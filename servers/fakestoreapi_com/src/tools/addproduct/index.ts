import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addproduct",
  "toolDescription": "Add a new product",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/products",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
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