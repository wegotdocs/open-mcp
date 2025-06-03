import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinvoicetimemetrics",
  "toolDescription": "Post an invoice time metric",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/time_metrics",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "user_id": "user_id",
      "business_id": "business_id",
      "invoice_id": "invoice_id",
      "start_timestamp": "start_timestamp",
      "end_timestamp": "end_timestamp"
    }
  },
  inputParamsSchema
}

export default tool