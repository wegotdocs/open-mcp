import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_the_configuration_of_a_company_api_v3_org_company_org_id_",
  "toolDescription": "[administrator] Update the configuration of a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}/conf",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "smtp": "smtp",
      "dev_offline_noti_grace_period_mins": "dev_offline_noti_grace_period_mins",
      "task_overdue_mins": "task_overdue_mins",
      "task_review_required": "task_review_required",
      "task_end_noti_enabled": "task_end_noti_enabled",
      "task_overdue_cancel_enabled": "task_overdue_cancel_enabled",
      "task_review_noti_enabled": "task_review_noti_enabled",
      "task_overdue_noti_enabled": "task_overdue_noti_enabled"
    }
  },
  inputParamsSchema
}

export default tool