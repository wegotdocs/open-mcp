import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_users",
  "toolDescription": "Load a user",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/users",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "first_name": "first_name",
      "last_name": "last_name",
      "email": "email",
      "group": "group",
      "position": "position",
      "active": "active",
      "business_unit": "business_unit",
      "location": "location",
      "description": "description",
      "phone_number": "phone_number",
      "hiring_date": "hiring_date",
      "leaving_date": "leaving_date",
      "custom_dropdown_fields": "custom_dropdown_fields",
      "custom_text_fields": "custom_text_fields",
      "productive_share": "productive_share",
      "event_timelines": "event_timelines",
      "direct_managers": "direct_managers",
      "daily_cost_info": "daily_cost_info",
      "hours_per_day": "hours_per_day",
      "workweek": "workweek"
    }
  },
  inputParamsSchema
}

export default tool