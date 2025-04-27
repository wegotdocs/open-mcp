import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecart",
  "toolDescription": "Update a cart",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/carts/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "userId": "userId",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool