import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteorder",
  "toolDescription": "Delete purchase order by identifier.",
  "baseUrl": "https://petstore3.swagger.io/api/v3/",
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