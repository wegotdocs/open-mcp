import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "placeorder",
  "toolDescription": "Place an order for a pet",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/store/order",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "petId": "petId",
      "quantity": "quantity",
      "shipDate": "shipDate",
      "status": "status",
      "complete": "complete"
    }
  },
  inputParamsSchema
}

export default tool