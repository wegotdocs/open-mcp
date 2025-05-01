import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reportprofitandloss",
  "toolDescription": "Report-ProfitAndLoss",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/reports/ProfitAndLoss",
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
      "accounting_method": "accounting_method",
      "qzurl": "qzurl",
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool