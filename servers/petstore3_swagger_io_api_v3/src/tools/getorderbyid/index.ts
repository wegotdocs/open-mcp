import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getorderbyid",
  "toolDescription": "Find purchase order by ID.",
  "baseUrl": "https://petstore3.swagger.io/api/v3",
  "path": "/store/order/{orderId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "orderId": "orderId"
    }
  },
  inputParamsSchema
}

export default tool