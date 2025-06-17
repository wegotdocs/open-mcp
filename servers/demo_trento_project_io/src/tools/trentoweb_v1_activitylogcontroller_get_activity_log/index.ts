import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_activitylogcontroller_get_activity_log",
  "toolDescription": "Fetches the Activity Log entries.",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/activity_log",
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
      "first": "first",
      "last": "last",
      "after": "after",
      "before": "before",
      "from_date": "from_date",
      "to_date": "to_date",
      "actor": "actor",
      "search": "search",
      "type": "type",
      "severity": "severity"
    }
  },
  inputParamsSchema
}

export default tool