import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sales_order_invoices_",
  "toolDescription": "sales-order-invoice-read Copy",
  "baseUrl": "http://localhost:8000",
  "path": "/sales-order-invoices/",
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
    "query": {
      "start_date": "start_date",
      "end_date": "end_date"
    },
    "header": {
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool