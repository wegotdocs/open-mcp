import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "config_org_api_v3_sys_org_org_id_config_post",
  "toolDescription": "[super administrator] Configure the organization.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/org/{org_id}/config",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "task_review_required": "task_review_required",
      "task_retention": "task_retention",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool