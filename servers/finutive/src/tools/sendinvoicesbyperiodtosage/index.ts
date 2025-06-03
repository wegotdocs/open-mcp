import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sendinvoicesbyperiodtosage",
  "toolDescription": "Send invoices by period to Sage",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/invoices/period/{period_id}/sage",
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
    "path": {
      "businessId": "businessId",
      "period_id": "period_id"
    },
    "body": {
      "invoice_ids": "invoice_ids"
    }
  },
  inputParamsSchema
}

export default tool