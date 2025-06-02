import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteorder",
  "toolDescription": "Delete purchase order by ID",
  "baseUrl": "http://petstore.swagger.io/v2",
  "path": "/store/order/{orderId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "orderId": "orderId"
    }
  },
  inputParamsSchema
}

export default tool