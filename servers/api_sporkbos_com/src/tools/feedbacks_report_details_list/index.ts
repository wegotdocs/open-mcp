import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "feedbacks_report_details_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/feedbacks/report-details/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "feedback_role": "feedback_role",
      "feedback_type": "feedback_type",
      "feedback_types": "feedback_types",
      "team": "team",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool