import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sales_orders_id_sales_order_individual_summary",
  "toolDescription": "sales_order_indiviual_summary",
  "baseUrl": "http://localhost:8000",
  "path": "/sales-orders/{id}/sales_order_individual_summary",
  "method": "get",
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
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool