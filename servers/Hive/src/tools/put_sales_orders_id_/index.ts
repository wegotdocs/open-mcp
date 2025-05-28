import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_sales_orders_id_",
  "toolDescription": "sales-orders update",
  "baseUrl": "http://localhost:8000",
  "path": "/sales-orders/{id}/",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool