import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reportcashflow",
  "toolDescription": "Report-CashFlow",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/reports/CashFlow",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "columns": "columns",
      "summarize_column_by": "summarize_column_by",
      "department": "department",
      "vendor": "vendor",
      "class": "class",
      "item": "item",
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool