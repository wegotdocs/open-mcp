import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_email_analysis_api_v1_email_analysis_analysis_id_put",
  "toolDescription": "Update Email Analysis",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/email-analysis/{analysis_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "analysis_id": "analysis_id"
    },
    "body": {
      "assigned_label": "assigned_label",
      "priority_level": "priority_level",
      "suggested_action": "suggested_action",
      "confidence_score": "confidence_score"
    }
  },
  inputParamsSchema
}

export default tool