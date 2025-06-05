import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_feedback_report_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/teams/{id}/feedback_report/",
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
    "path": {
      "id": "id"
    },
    "query": {
      "creators": "creators",
      "end": "end",
      "feedback_types": "feedback_types",
      "order_by": "order_by",
      "performance_types": "performance_types",
      "recipients": "recipients",
      "sort_by": "sort_by",
      "start": "start",
      "users": "users"
    }
  },
  inputParamsSchema
}

export default tool