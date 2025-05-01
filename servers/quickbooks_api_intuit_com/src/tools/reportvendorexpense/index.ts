import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reportvendorexpense",
  "toolDescription": "Report-VendorExpense",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/reports/VendorExpenses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "columns": "columns"
    }
  },
  inputParamsSchema
}

export default tool