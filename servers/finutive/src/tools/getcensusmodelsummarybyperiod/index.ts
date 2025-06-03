import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcensusmodelsummarybyperiod",
  "toolDescription": "Get census declaration models summary by period",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/invoices/census_statements/summary/{name}",
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
      "name": "name"
    },
    "query": {
      "search": "search",
      "with_requirements": "with_requirements",
      "with_positive_values": "with_positive_values",
      "opened_period": "opened_period",
      "closed_period": "closed_period",
      "pending_csv": "pending_csv",
      "completed_csv": "completed_csv",
      "in_process_csv": "in_process_csv",
      "business_type": "business_type",
      "min_tickets": "min_tickets",
      "max_tickets": "max_tickets",
      "in_sage": "in_sage",
      "with_laboral_service": "with_laboral_service",
      "with_start_company_date": "with_start_company_date",
      "min_csv_return": "min_csv_return",
      "max_csv_return": "max_csv_return",
      "model_ids": "model_ids"
    }
  },
  inputParamsSchema
}

export default tool