import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getadminbusinesscreation",
  "toolDescription": "Get list of business creations",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation",
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
    "query": {
      "start": "start",
      "length": "length",
      "query": "query",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_date_activity": "start_date_activity",
      "end_date_activity": "end_date_activity",
      "start_recurrent_date": "start_recurrent_date",
      "end_recurrent_date": "end_recurrent_date",
      "status": "status",
      "paid": "paid",
      "responsible": "responsible",
      "business_type": "business_type",
      "language": "language",
      "blocked": "blocked",
      "recurrent": "recurrent",
      "tags_filter_mode": "tags_filter_mode",
      "contribution_types": "contribution_types",
      "start_activation_date": "start_activation_date",
      "end_activation_date": "end_activation_date",
      "start_date_company_constitution": "start_date_company_constitution",
      "end_date_company_constitution": "end_date_company_constitution",
      "start_paid_date": "start_paid_date",
      "end_paid_date": "end_paid_date",
      "deal_labels": "deal_labels",
      "ids": "ids",
      "order_column": "order_column",
      "order_dir": "order_dir",
      "select_all": "select_all"
    }
  },
  inputParamsSchema
}

export default tool