import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_projects",
  "toolDescription": "Load a project",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/projects",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "name": "name",
      "description": "description",
      "client": "client",
      "category": "category",
      "status": "status",
      "business_units": "business_units",
      "estimated_start_date": "estimated_start_date",
      "estimated_end_date": "estimated_end_date",
      "archived": "archived",
      "locked": "locked",
      "billing_method": "billing_method",
      "target_margin_rate": "target_margin_rate",
      "man_days_sold": "man_days_sold",
      "kanban_column": "kanban_column",
      "custom_dropdown_fields": "custom_dropdown_fields",
      "custom_text_fields": "custom_text_fields",
      "creator": "creator",
      "co_owners": "co_owners",
      "parent_project": "parent_project",
      "fees": "fees",
      "sold_budget_info": "sold_budget_info"
    }
  },
  inputParamsSchema
}

export default tool