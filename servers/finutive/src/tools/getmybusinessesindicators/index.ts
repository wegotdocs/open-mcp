import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmybusinessesindicators",
  "toolDescription": "Get business indicators",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/myBusinesses/indicators",
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
      "search_string": "search_string",
      "business_type": "business_type",
      "startup_certificate": "startup_certificate",
      "invite_start_date": "invite_start_date",
      "invite_end_date": "invite_end_date",
      "services_id": "services_id",
      "deal_labels_id": "deal_labels_id",
      "all_businesses": "all_businesses",
      "accounting_responsibles_id": "accounting_responsibles_id",
      "min_accounting_service_months": "min_accounting_service_months",
      "max_accounting_service_months": "max_accounting_service_months",
      "min_tickets_to_process": "min_tickets_to_process",
      "max_tickets_to_process": "max_tickets_to_process",
      "min_global_rating": "min_global_rating",
      "max_global_rating": "max_global_rating",
      "min_engagement": "min_engagement",
      "max_engagement": "max_engagement",
      "business_categories_id": "business_categories_id",
      "request": "request"
    }
  },
  inputParamsSchema
}

export default tool