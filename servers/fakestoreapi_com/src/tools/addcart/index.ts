import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcart",
  "toolDescription": "Add a new cart",
  "baseUrl": "https://fakestoreapi.com",
  "path": "/carts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "userId": "userId",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool