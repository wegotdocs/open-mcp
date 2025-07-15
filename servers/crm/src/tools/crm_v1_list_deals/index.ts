import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_deals",
  "toolDescription": "Listar negociações",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit",
      "order": "order",
      "direction": "direction",
      "name": "name",
      "win": "win",
      "user_id": "user_id",
      "closed_at": "closed_at",
      "closed_at_period": "closed_at_period",
      "created_at_period": "created_at_period",
      "prediction_date_period": "prediction_date_period",
      "start_date": "start_date",
      "end_date": "end_date",
      "campaign_id": "campaign_id",
      "deal_stage_id": "deal_stage_id",
      "deal_lost_reason_id": "deal_lost_reason_id",
      "deal_pipeline_id": "deal_pipeline_id",
      "organization": "organization",
      "hold": "hold",
      "product_presence": "product_presence",
      "next_page": "next_page"
    }
  },
  inputParamsSchema
}

export default tool