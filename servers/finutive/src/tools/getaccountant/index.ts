import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaccountant",
  "toolDescription": "Get accountant information",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/accountant",
  "method": "get",
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
      "businessId": "businessId"
    },
    "query": {
      "line_activities": "line_activities",
      "invoice_tags": "invoice_tags",
      "clients": "clients",
      "providers": "providers",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool