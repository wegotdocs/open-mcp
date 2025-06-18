import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_email_analyses_api_v1_email_analysis_get",
  "toolDescription": "Get Email Analyses",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/email-analysis/",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "skip": "skip",
      "limit": "limit",
      "priority_level": "priority_level",
      "assigned_label": "assigned_label",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool